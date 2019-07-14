
/**
* @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
* @return {string} HTML разметка страницы
*/

function runEngineTemplate(bem) {

    const orderPath = [];
    const classesArray = [];
    let mixArrayLength = 0;

    const listOfMistakesForm = [
      {
        code: "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
        error: "Подписи и поля в форме должны быть одного размера",
        location: ""
      },
      {
        code: "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID",
        error: "Вертикальные внутренние отступы в форме имеют неверное значение",
        location: ""
      },
      {
        code: "FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID",
        error: "Горизонтальные внутренние отступы в форме имеют неверное значение",
        location: ""
      },
      {
        code: "FORM.CONTENT_ITEM_INDENT_IS_INVALID",
        error: "Нижний отступ элемента формы имеет неверное значение",
        location: ""
      },
      {
        code: "FORM.HEADER_TEXT_SIZE_IS_INVALID",
        error: "Текстовый блок в заголовке формы имеет неверный размер",
        location: ""
      },
      {
        code: "FORM.HEADER_VERTICAL_SPACE_IS_INVALID",
        error: "Вертикальные внутренние отступы заголовка формы имеют неверное значение",
        location: ""
      },
      {
        code: "FORM.HEADER_HORIZONTAL_SPACE_IS_INVALID",
        error: "Горизонтальные внутренние отступы заголовка формы имеют неверное значение",
        location: ""
      },
      {
        code: "FORM.FOOTER_VERTICAL_SPACE_IS_INVALID",
        error: "Вертикальные внутренние отступы подвала формы имеют неверное значение",
        location: ""
      },
      {
        code: "FORM.FOOTER_HORIZONTAL_SPACE_IS_INVALID",
        error: "Горизонтальные внутренние отступы подвала формы имеют неверное значение",
        location: ""
      },
      {
        code: "FORM.FOOTER_TEXT_SIZE_IS_INVALID",
        error: "Текстовый блок в подвале формы имеет неверный размер",
        location: ""
      }
    ];

    const listOfMistakesText = [
      {
        code: "TEXT.SEVERAL_H1",
        error: "Несколько заголовков первого уровня на странице",
        location: ""
      },
      {
        code: "TEXT.INVALID_H2_POSITION",
        error: "Заголовок второго уровня находится перед заголовком первого уровня",
        location: ""
      },
      {
        code: "TEXT.INVALID_H3_POSITION",
        error: "Заголовок третьего уровня находится перед заголовком второго уровня",
        location: ""
      }
    ]

    const resultMistakesArray = [];

    let firstMistakeTextInputSize = null;

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
        //other blocks
        goThroughTree(bem, order);

        // first in order
        orderPath.unshift({order: 0, block: bem.block});

        console.log('--------classesArray--------');

        // add tag and classList to orderPath array elements
        addTagAndClassListToArray();

        console.log(orderPath);


        console.log('==================================================');
        catchForm();
        console.log('==================================================');

        console.log(resultMistakesArray);

        // let resultVerstka = createResult(order);
        //
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
            classesArray[classesArray.length - 1].classList += ' ' + content;
            mixArrayLength--;
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
                    orderPath.push({order:order, block:object[key].block});
                    createBlock(object[key]);
                }
                else if (key != 'mods' && key != 'elemMods' && mixArrayLength > 0) {
                    createBlock(object[key]);
                }

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

    const catchForm = () => {
      let startForm = 0;
      let whithinForm = false;
      for (let i = 0, length = orderPath.length; i < length; i++) {

        if (orderPath[i].block == 'form' && !whithinForm) {
          console.log(`i = ${i}, order = ${orderPath[i].order}, classList = ${orderPath[i].classList}`);
          whithinForm = true;
          startForm = orderPath[i].order;
        }
        else if (whithinForm) {
          console.log(`i = ${i}, order = ${orderPath[i].order}, classList = ${orderPath[i].classList}`);

          isFirstMistakeExist(i);

          if (orderPath[i + 1].order <= startForm) {
            whithinForm = false;
          }
        }

      }
    }

    const isFirstMistakeExist = i => {
      if (orderPath[i].classList.match('form__label') && orderPath[i + 1] && orderPath[i + 1].classList.match('text_size_')) {

        let textSize = retrieveModSizeFromClassList('text_size_', i + 1);

        if (firstMistakeTextInputSize == null) {
          firstMistakeTextInputSize = textSize;
        }
        else if (textSize != firstMistakeTextInputSize) {

          resultMistakesArray.push(listOfMistakesForm[0]);
          firstMistakeTextInputSize = null;
        }
        console.log(`textSize = ${textSize}`);

      }
      else if (orderPath[i].classList.match('input_size_')) {

        let inputSize = retrieveModSizeFromClassList('input_size_', i);

        if (firstMistakeTextInputSize == null) {
          firstMistakeTextInputSize = inputSize;
        }
        else if (inputSize != firstMistakeTextInputSize) {

          resultMistakesArray.push(listOfMistakesForm[0]);
          firstMistakeTextInputSize = null;
        }
        console.log(`inputSize = ${inputSize}`);

      }
      else if (orderPath[i].classList.match('button_size_')) {

        let buttonSize = retrieveModSizeFromClassList('button_size_', i);

        if (firstMistakeTextInputSize == null) {
          firstMistakeTextInputSize = buttonSize;
        }
        else if (buttonSize != firstMistakeTextInputSize) {

          resultMistakesArray.push(listOfMistakesForm[0]);
          firstMistakeTextInputSize = null;
        }
        console.log(`buttonSize = ${buttonSize}`);

      }
    }

    const retrieveModSizeFromClassList = (str, i) => {
      return orderPath[i].classList.split(' ').
              filter( item => item.match(str) )[0].
              split('_').pop();
    }

//newstr = str.slice(0, str.lastIndexOf('|3|')) + 'CONTENT' + str.slice(str.lastIndexOf('|3|') + '|3|'.length, str.length)

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
