
/**
* @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
* @return {array} — Массив ошибок 
*/

function runEngineTemplate(bem) {

    const orderPath = [];
    const classesArray = [];
    let mixArrayLength = 0;
    let mixPosition = null;

    const listOfSizes = {
      "xxxs": 0,
      "xxs": 1,
      "xs": 2,
      "s": 3,
      "m": 4,
      "l": 5,
      "xl": 6,
      "xxl": 7,
      "xxxl": 8
    }

    const listOfMistakesForm = [
      {
        "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
        "error": "Подписи и поля в форме должны быть одного размера"
      },
      {
        "code": "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID",
        "error": "Вертикальные внутренние отступы в форме имеют неверное значение"
      },
      {
        "code": "FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID",
        "error": "Горизонтальные внутренние отступы в форме имеют неверное значение"
      },
      {
        "code": "FORM.CONTENT_ITEM_INDENT_IS_INVALID",
        "error": "Нижний отступ элемента формы имеет неверное значение"
      },
      {
        "code": "FORM.HEADER_TEXT_SIZE_IS_INVALID",
        "error": "Текстовый блок в заголовке формы имеет неверный размер"
      },
      {
        "code": "FORM.HEADER_VERTICAL_SPACE_IS_INVALID",
        "error": "Вертикальные внутренние отступы заголовка формы имеют неверное значение"
      },
      {
        "code": "FORM.HEADER_HORIZONTAL_SPACE_IS_INVALID",
        "error": "Горизонтальные внутренние отступы заголовка формы имеют неверное значение"
      },
      {
        "code": "FORM.FOOTER_VERTICAL_SPACE_IS_INVALID",
        "error": "Вертикальные внутренние отступы подвала формы имеют неверное значение"
      },
      {
        "code": "FORM.FOOTER_HORIZONTAL_SPACE_IS_INVALID",
        "error": "Горизонтальные внутренние отступы подвала формы имеют неверное значение"
      },
      {
        "code": "FORM.FOOTER_TEXT_SIZE_IS_INVALID",
        "error": "Текстовый блок в подвале формы имеет неверный размер"
      }
    ];

    const listOfMistakesText = [
      {
        "code": "TEXT.SEVERAL_H1",
        "error": "Несколько заголовков первого уровня на странице"
      },
      {
        "code": "TEXT.INVALID_H2_POSITION",
        "error": "Заголовок второго уровня находится перед заголовком первого уровня"
      },
      {
        "code": "TEXT.INVALID_H3_POSITION",
        "error": "Заголовок третьего уровня находится перед заголовком второго уровня"
      }
    ]

    const resultMistakesArray = [];

    const positionsOfForms = [];

    // 'for mistakes' variables
    let mistake1CompareSize = null;
    let mistake2CompareSize = null;
    let mistake3CompareSize = null;

    const isArray = arr => {
        return Object.prototype.toString.call(arr) == '[object Array]';
    }

    const isObject = obj => {
        return Object.prototype.toString.call(obj) == '[object Object]';
    }

    const isString = str => {
        return Object.prototype.toString.call(str) == '[object String]';
    }

    function mainLogic(bem) {
        let order = 0;

        // first block
        createBlock(bem);

        // first in order
        orderPath.unshift({order: 0, block: bem.block});
        
        //other blocks
        goThroughTree(bem, order);


        // first in order
        // orderPath.unshift({order: 0, block: bem.block});

        // console.log('--------classesArray--------');

        // add tag and classList to orderPath array elements
        addTagAndClassListToArray();


        console.log(orderPath);
    


        console.log('==================================================');

        findPositionOfForm(bem);


        console.log('==================================================');
        catchForm();
        console.log('==================================================');

        console.log('==================================================');
        console.log(positionsOfForms);

        console.log('==================================================');

        // insert position of mistakes
        for (let i = 0, length = resultMistakesArray.length; i < length; i++) {
          let index = resultMistakesArray[i]["location"];
          resultMistakesArray[i]["location"] = positionsOfForms[index];
        }

        console.log(resultMistakesArray);


        // let resultVerstka = createResult(order);
        
        // console.log(resultVerstka);

        // resultVerstka = cleanResult(resultVerstka);
        // console.log('---------------');
        // console.log(resultVerstka);

        // return resultVerstka;
    }

    const createBlock = (object) => {
        let block = object["block"] || "";
        let elem = (object["elem"] != undefined) ? `${object["elem"]}` : "";
        let mods = [];
        let elemMods = [];
        let mix = object["mix"] || [];

        if (object["mods"] != undefined) {
        retrieveKeysToArray(object["mods"], mods);
        }
        if (object["elemMods"] != undefined) {
        retrieveKeysToArray(object["elemMods"], elemMods);
        }

        createClassList(block, mods, elem, elemMods, mix);
    }

    const retrieveKeysToArray = (object, arr) => {
        for (let key in object) {
        if (typeof(object[key]) == 'string') {
            arr.push(`${key}_${object[key]}`);
        }
        else if (typeof(object[key]) == 'boolean') {
            arr.push(`${key}`);
        }
        }
        return arr;
    }

    const createClassList = (block, mods, elem, elemMods, mix) => {
        let infoRow = {
            tag: null,
            classList: null
        };
        let content = ``;
        if (elemMods.length > 0 && elem != "") {
            content += `${block}__${elem}`;
        elemMods.forEach(item => {
            content += ` ${block}__${elem}_${item}`;
        });
        }
        else if (elemMods.length == 0 && elem != "") {
        content += `${block}__${elem}`;
        }
        else if (mods.length > 0 && block != "") {
        content += `${block}`;
        mods.forEach(item => {
            content += ` ${block}_${item}`;
        });
        }
        else if (mods.length == 0 && block != "") {
        content += `${block}`;
        }

        if (mixArrayLength == 0) {
            infoRow.tag = 'div';
            infoRow.classList = content;
            classesArray.push(infoRow);
        }
        else if (mixArrayLength > 0) {
            
            // find position of the current mix in classesArray
            for (let length = orderPath.length, i = length - 1; i > 0; i--) {
                // console.log(`createClassList i = ${i}`);
                // console.log(orderPath[i].order);

              if (orderPath[i].order == mixPosition) {
                classesArray[i].classList += ' ' + content;
                mixArrayLength--;
                break;
              }
            }
            
            // console.log('createClassList createClassList createClassList createClassList');
            // console.log(orderPath);
            // console.log('createClassList createClassList createClassList createClassList');

            // classesArray[classesArray.length - 1].classList += ' ' + content;
            // mixArrayLength--;
        }
    }

    // go through all the json data
    const goThroughTree = (object, order) => {
        for (let key in object) {

            if (key == "block") {
                order++;
            };

            if (isObject(object[key])) {

                if (key != 'mods' && key != 'elemMods' && mixArrayLength == 0) {
                    console.log(object[key]);
                    orderPath.push({order:order, block:object[key].block});
                    createBlock(object[key]);
                }
                else if (key != 'mods' && key != 'elemMods' && mixArrayLength > 0) {
                    createBlock(object[key]);
                }

                if (object[key]['mix']) {
                  console.log('<><><><><><><><> MMMMMMIIIIIIIIXXXXXXX'); 
                  mixPosition = order; 
                  console.log(`mixPosition = ${mixPosition}`)
                };

                goThroughTree(object[key], order);
            }
            else if (isArray(object[key])) {

                if (key == 'mix') {
                    mixArrayLength = object[key].length;
                }
                goThroughTree(object[key], order);
            }
        }
    }

    const addTagAndClassListToArray = () => {
        if (orderPath.length == classesArray.length) {
            for (let i = 0, size = classesArray.length; i < size; i++) {
                //console.log(classesArray[i].tag);
                orderPath[i].tag = classesArray[i].tag;
                orderPath[i].classList = classesArray[i].classList;
            }
        }
    }

    const findPositionOfForm = bem => {

      console.log('==================================================');
      const arrayOfJsonLines = JSON.stringify(bem, null, '\t').split('\n');
      console.log(arrayOfJsonLines);
      console.log('==================================================');

      let startColumn = null;

      for (let i = 0, length = arrayOfJsonLines.length; i < length; i++) {

        if (arrayOfJsonLines[i].match('form') && arrayOfJsonLines[i + 1] && arrayOfJsonLines[i + 1].match('content')) {


          console.log(`i = ${i} (i - 1 = ${i - 1})\n`);
          if (arrayOfJsonLines[i - 1].trim() == '{') {
            startColumn = arrayOfJsonLines[i - 1].indexOf('{');
            console.log(`start: line = ${i}, column = ${startColumn}`);
            positionsOfForms.push( {"start": {"line": i, "column": startColumn}} );
          }
          console.log(arrayOfJsonLines[i]);
          console.log(arrayOfJsonLines[i].indexOf('"'));

        }
        if (startColumn != null && arrayOfJsonLines[i].trim().match('}') && arrayOfJsonLines[i].indexOf('}') == startColumn) {
          console.log(`i = ${i}\n`);
          console.log(`end: line = ${i + 1}, column = ${startColumn + 1}`);
          positionsOfForms[positionsOfForms.length - 1]["end"] = {"line": i + 1, "column": startColumn + 1};
          startColumn = null;
        }
      }

    }

    const catchForm = () => {

      console.log('[<>-<>-<>-<> catchForm() <>-<>-<>-<>]');
      let startForm = 0;
      let whithinForm = false;
      let numberOfForm = -1;
      for (let i = 0, length = orderPath.length; i < length; i++) {

        if (orderPath[i].block == 'form' && !whithinForm) {
          numberOfForm++;
          //console.log(`i = ${i}, order = ${orderPath[i].order}, classList = ${orderPath[i].classList}`);
          whithinForm = true;
          startForm = orderPath[i].order;
        }
        else if (whithinForm) {
          //console.log(`i = ${i}, order = ${orderPath[i].order}, classList = ${orderPath[i].classList}`);

          isExistMistake1(i, numberOfForm);
          isExistMistake2(i, numberOfForm);
          isExistMistake3(i, numberOfForm);

          if (orderPath[i + 1].order <= startForm) {
            whithinForm = false;

            // обнуление временных хранилищ
            mistake1CompareSize = null;
            mistake2CompareSize = null;
            mistake3CompareSize = null;

            console.log('-- CLEAR COMPARED SIZES --');
          }
        }

      }
    }

    const isExistMistake1 = (i, numberOfForm) => {  
         
      if (orderPath[i].classList.match('form__label') && orderPath[i + 1] && orderPath[i + 1].classList.match('text_size_')) {

        let textSize = retrieveModSizeFromClassList('text_size_', i + 1);

        if (mistake1CompareSize == null) {
          mistake1CompareSize = textSize;
        }
        else if (textSize != mistake1CompareSize) {

          resultMistakesArray.push({"code": listOfMistakesForm[0]["code"],
                                    "error": listOfMistakesForm[0]["error"]});

          resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
          mistake1CompareSize = null;
        }
      }
      else if (orderPath[i].classList.match('input_size_')) {

        let inputSize = retrieveModSizeFromClassList('input_size_', i);

        if (mistake1CompareSize == null) {
          mistake1CompareSize = inputSize;
        }
        else if (inputSize != mistake1CompareSize) {

          resultMistakesArray.push({"code": listOfMistakesForm[0]["code"],
                                    "error": listOfMistakesForm[0]["error"]});

          resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
          mistake1CompareSize = null;
        }
      }
      else if (orderPath[i].classList.match('button_size_')) {

        let buttonSize = retrieveModSizeFromClassList('button_size_', i);

        if (mistake1CompareSize == null) {
          mistake1CompareSize = buttonSize;
        }
        else if (buttonSize != mistake1CompareSize) {

          resultMistakesArray.push({"code": listOfMistakesForm[0]["code"],
                                    "error": listOfMistakesForm[0]["error"]});

          resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
          mistake1CompareSize = null;

        }
      }
    }

    const isExistMistake2 = (i, numberOfForm) => {

      if (orderPath[i].classList.match('input_size_')) {

        let inputSize = retrieveModSizeFromClassList('input_size_', i);

        if (mistake2CompareSize == null) {
          mistake2CompareSize = listOfSizes[inputSize];
        }
        else if ( (mistake2CompareSize - listOfSizes[inputSize]) != 2 ) {
          
          resultMistakesArray.push({"code": listOfMistakesForm[1]["code"],
                                    "error": listOfMistakesForm[1]["error"]});

          resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
          mistake2CompareSize = null;
        }
      }
      else if (orderPath[i].classList.match('form__item_space-v_')) {
        
        let formItemSize = retrieveModSizeFromClassList('form__item_space-v_', i);

        if (mistake2CompareSize == null) {
          mistake2CompareSize = listOfSizes[formItemSize];
        }
        else if ( (listOfSizes[formItemSize] - mistake2CompareSize) != 2 ) {
          
          resultMistakesArray.push({"code": listOfMistakesForm[1]["code"],
                                    "error": listOfMistakesForm[1]["error"]});

          resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
          mistake2CompareSize = null;
        }
      }
    }

    const isExistMistake3 = (i, numberOfForm) => {
      console.log('[isExistMistake3]');

      console.log(`numberOfForm = ${numberOfForm}`);
      console.log(`orderPath[i].classList = ${orderPath[i].classList}`);
      console.log(`mistake3CompareSize = ${mistake3CompareSize}`);


      if (orderPath[i].classList.match('input_size_')) {

        let inputSize = retrieveModSizeFromClassList('input_size_', i);

        console.log('CONDITION IF');
        console.log(`inputSize = ${inputSize}`);

        if (mistake3CompareSize == null) {
          mistake3CompareSize = listOfSizes[inputSize];
        }
        else if ( (mistake3CompareSize - listOfSizes[inputSize]) != 1 ) {
          
          console.log('PUSH TO MISTAKES ARRAY');
          resultMistakesArray.push({"code": listOfMistakesForm[2]["code"],
                                    "error": listOfMistakesForm[2]["error"]});

          resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
          mistake3CompareSize = null;
        }

        console.log(`mistake3CompareSize = ${mistake3CompareSize}`);

      }
      else if (orderPath[i].classList.match('form__item_space-h_')) {
        
        let formItemSize = retrieveModSizeFromClassList('form__item_space-h_', i);

        console.log('CONDITION ELSE IF');
        console.log(`formItemSize = ${formItemSize}`);

        if (mistake3CompareSize == null) {
          mistake3CompareSize = listOfSizes[formItemSize];
        }
        else if ( (listOfSizes[formItemSize] - mistake3CompareSize) != 1 ) {
          
          console.log('PUSH TO MISTAKES ARRAY');
          resultMistakesArray.push({"code": listOfMistakesForm[2]["code"],
                                    "error": listOfMistakesForm[2]["error"]});

          resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
          mistake3CompareSize = null;
        }

        console.log(`mistake3CompareSize = ${mistake3CompareSize}`);

      }
    }



    const retrieveModSizeFromClassList = (str, i) => {
      return orderPath[i].classList.split(' ').
              filter( item => item.match(str) )[0].
              split('_').pop();
    }

    const createResult = (order) => {

        let template = '|CONTENT|';
        let resultVerstka = `<${orderPath[0].tag} class="${orderPath[0].classList}">|CONTENT|</${orderPath[0].tag}>|0|`;

        let newOrder = 0;
        for (let i = 1, size = orderPath.length; i < size; i++) {
            //debugger;

            let element = null;
            let tabs = setTabs(orderPath[i].order);
            let closingTabs = setTabs(orderPath[i].order - 1);

            if (orderPath[i].order < newOrder) {
                // удалить текущий |CONTENT|
                resultVerstka = resultVerstka.replace(template, '');

                // если вложенность внутрь есть
                if (orderPath[i + 1] && orderPath[i + 1].order > orderPath[i].order) {
                    element = `\n${tabs}<${orderPath[i].tag} class="${orderPath[i].classList}">|CONTENT|</${orderPath[i].tag}>|${orderPath[i].order}|`;
                }
                // если вложенности внутрь нет или это последний элемент
                else if (!orderPath[i + 1] || orderPath[i + 1] && orderPath[i + 1].order <= orderPath[i].order) {
                    element = `\n${tabs}<${orderPath[i].tag} class="${orderPath[i].classList}"></${orderPath[i].tag}>|${orderPath[i].order}||CONTENT|`;
                }
                //resultVerstka = resultVerstka.replace(`|${orderPath[i].order}|`, element);
                let lastIndex = resultVerstka.lastIndexOf(`|${orderPath[i].order}|`);
                let numberLength = `|${orderPath[i].order}|`.length;
                resultVerstka = resultVerstka.slice(0, lastIndex) +
                          element +
                          resultVerstka.slice(lastIndex + numberLength, resultVerstka.length);
            }
            else if (orderPath[i].order == newOrder) {

                // если вложенность внутрь есть
                if (orderPath[i + 1] && orderPath[i + 1].order > orderPath[i].order) {
                    element = `\n${tabs}<${orderPath[i].tag} class="${orderPath[i].classList}">|CONTENT|</${orderPath[i].tag}>|${orderPath[i].order}|`;
                }
                // если вложенности внутрь нет или это последний элемент
                else if (!orderPath[i + 1] || orderPath[i + 1] && orderPath[i + 1].order <= orderPath[i].order) {
                    element = `\n${tabs}<${orderPath[i].tag} class="${orderPath[i].classList}"></${orderPath[i].tag}>|${orderPath[i].order}||CONTENT|`;
                }

                resultVerstka = resultVerstka.replace(template, element);
            }
            else if (orderPath[i].order > order) {
                // если вложенность внутрь есть
                if (orderPath[i + 1] && orderPath[i + 1].order > orderPath[i].order) {
                    element = `\n${tabs}<${orderPath[i].tag} class="${orderPath[i].classList}">|CONTENT|</${orderPath[i].tag}>|${orderPath[i].order}|\n${closingTabs}`;
                }
                // если вложенности внутрь нет или это последний элемент
                else if (!orderPath[i + 1] || orderPath[i + 1] && orderPath[i + 1].order <= orderPath[i].order) {
                    element = `\n${tabs}<${orderPath[i].tag} class="${orderPath[i].classList}"></${orderPath[i].tag}>|${orderPath[i].order}||CONTENT|\n${closingTabs}`;
                }
                resultVerstka = resultVerstka.replace(template, element);
            }
            newOrder = orderPath[i].order;

            // удаление лишнего |CONTENT|
            if (!orderPath[i + 1]) {
                resultVerstka = resultVerstka.replace(template, '');
            }
        }

        return resultVerstka;
    }

    const setTabs = (length) => {
        let tabs = '';
        for (let i = 0; i < length; i++) {
            tabs += '\t';
        }
        return tabs;
    }

    const cleanResult = (result) => {

        let indexes = result.match(/\|\d+\|/g);
        indexes.forEach(item => {
            result = result.replace(item, '')
        })
        return result;
    }

    mainLogic(bem);
}

runEngineTemplate(bem);
