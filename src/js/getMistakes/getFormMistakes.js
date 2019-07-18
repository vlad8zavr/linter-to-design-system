
import listOfMistakesForm from '../mistakesList/formMistakes';
import listOfSizes from '../sizesList/sizesList';
import retrieveModSizeFromClassList from './retrieveModSizeFromClassList';

export default function(orderPath) {

    const resultMistakesArray = [];

    // 'for mistakes' variables
    let mistake1CompareSize = null;
    let mistake2CompareSize = null;
    let mistake3CompareSize = null;
    let mistake4CompareSize = null;
    let mistake5CompareSize = null;
    let mistake6CompareSize = null;
    let mistake7CompareSize = null;
    let mistake8CompareSize = null;
    let mistake9CompareSize = null;
    let mistake10CompareSize = null;


    function catchError(orderPath) {
        let startForm = 0;
        let whithinForm = false;
        let numberOfForm = -1;

        for (let i = 0, length = orderPath.length; i < length; i++) {

            if (orderPath[i].block == 'form' && !whithinForm) {
              numberOfForm++;
              whithinForm = true;
              startForm = orderPath[i].order;
            }
            else if (whithinForm) {
    
                isExistMistake1(i, numberOfForm);
                isExistMistake2(i, numberOfForm);
                isExistMistake3(i, numberOfForm);
                isExistMistake4(i, numberOfForm);
                isExistMistake5(i, numberOfForm);
                isExistMistake6(i, numberOfForm);
                isExistMistake7(i, numberOfForm);
                isExistMistake8(i, numberOfForm);
                isExistMistake9(i, numberOfForm);
                isExistMistake10(i, numberOfForm);
    
                if (orderPath[i + 1].order <= startForm) {
                    whithinForm = false;
    
                    // обнуление временных хранилищ
                    mistake1CompareSize = null;
                    mistake2CompareSize = null;
                    mistake3CompareSize = null;
                    mistake4CompareSize = null;
                    mistake5CompareSize = null;
                    mistake6CompareSize = null;
                    mistake7CompareSize = null;
                    mistake8CompareSize = null;
                    mistake9CompareSize = null;
                    mistake10CompareSize = null;
                }
            }

            /**
             * if (text mistakes)
             */
        }
    }


    const isExistMistake1 = (i, numberOfForm) => {  
         
        if (orderPath[i].classList.match('form__label') && orderPath[i + 1] && orderPath[i + 1].classList.match('text_size_')) {
  
            let textSize = retrieveModSizeFromClassList('text_size_', i + 1, orderPath);
    
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
  
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
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
  
            let buttonSize = retrieveModSizeFromClassList('button_size_', i, orderPath);
    
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


    const isExistMistake2 = (i, numberOfForm) =>  {

        if (orderPath[i].classList.match('form__content') && orderPath[i].classList.match('form__item_space-v_')) {
          
            let formItemSize = retrieveModSizeFromClassList('form__item_space-v_', i, orderPath);
    
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
        else if (orderPath[i].classList.match('input_size_')) {
  
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
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
    }


    const isExistMistake3 = (i, numberOfForm) => {

        if (orderPath[i].classList.match('form__content') && orderPath[i].classList.match('form__item_space-h_')) {
          
            let formItemSize = retrieveModSizeFromClassList('form__item_space-h_', i, orderPath);
    
            if (mistake3CompareSize == null) {
                mistake3CompareSize = listOfSizes[formItemSize];
            }
            else if ( (listOfSizes[formItemSize] - mistake3CompareSize) != 1 ) {
                
                resultMistakesArray.push({"code": listOfMistakesForm[2]["code"],
                                        "error": listOfMistakesForm[2]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake3CompareSize = null;
            }
        }
        else if (orderPath[i].classList.match('input_size_')) {
  
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
            if (mistake3CompareSize == null) {
                mistake3CompareSize = listOfSizes[inputSize];
            }
            else if ( (mistake3CompareSize - listOfSizes[inputSize]) != 1 ) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[2]["code"],
                                        "error": listOfMistakesForm[2]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake3CompareSize = null;
            }
        }
    }


    const isExistMistake4 = (i, numberOfForm) => {

        if (orderPath[i].classList.match('form__content-item') && orderPath[i].classList.match('form__item_indent-b_')) {
          
            let formItemSize = retrieveModSizeFromClassList('form__item_indent-b_', i, orderPath);
    
            if (mistake4CompareSize == null) {
                mistake4CompareSize = listOfSizes[formItemSize];
            }
            else if ( (listOfSizes[formItemSize] - mistake4CompareSize) != 1 ) {
                
                resultMistakesArray.push({"code": listOfMistakesForm[3]["code"],
                                        "error": listOfMistakesForm[3]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake4CompareSize = null;
            }
        }
        else if (orderPath[i].classList.match('input_size_')) {
  
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
            if (mistake4CompareSize == null) {
                mistake4CompareSize = listOfSizes[inputSize];
            }
            else if ( (mistake4CompareSize - listOfSizes[inputSize]) != 1 ) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[3]["code"],
                                        "error": listOfMistakesForm[3]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake4CompareSize = null;
            }
        }
    }
  

    const isExistMistake5 = (i, numberOfForm) => {

        if (orderPath[i].classList.match('form__header') && orderPath[i + 1] && orderPath[i + 1].classList.match('text_size_')) {
          
            let textSize = retrieveModSizeFromClassList('text_size_', i + 1, orderPath);
    
            if (mistake5CompareSize == null) {
                mistake5CompareSize = textSize;
            }
            else if ( (listOfSizes[textSize] - mistake5CompareSize) != 2 ) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[4]["code"],
                                        "error": listOfMistakesForm[4]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake5CompareSize = null;
            }
        }
        else if (orderPath[i].classList.match('input_size_')) {
  
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
            if (mistake5CompareSize == null) {
                mistake5CompareSize = inputSize;
            }
            else if ( (mistake5CompareSize - listOfSizes[inputSize]) != 2) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[4]["code"],
                                        "error": listOfMistakesForm[4]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake5CompareSize = null;
            }
        }
    }


    const isExistMistake6 = (i, numberOfForm) => {

        if (orderPath[i].classList.match('form__header') && orderPath[i].classList.match('form__item_space-v_')) {
  
          let formItemSize = retrieveModSizeFromClassList('form__item_space-v_', i, orderPath);
  
          if (mistake6CompareSize == null) {
            mistake6CompareSize = formItemSize;
          }
          else if (formItemSize != mistake6CompareSize) {
  
            resultMistakesArray.push({"code": listOfMistakesForm[5]["code"],
                                      "error": listOfMistakesForm[5]["error"]});
  
            resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
            mistake6CompareSize = null;
          }
        }
        else if (orderPath[i].classList.match('input_size_')) {
          
          let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
  
          if (mistake6CompareSize == null) {
            mistake6CompareSize = inputSize;
          }
          else if (inputSize != mistake6CompareSize) {
  
            resultMistakesArray.push({"code": listOfMistakesForm[5]["code"],
                                      "error": listOfMistakesForm[5]["error"]});
  
            resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
            mistake6CompareSize = null;
          }
        }
    }


    const isExistMistake7 = (i, numberOfForm) => {

        if (orderPath[i].classList.match('form__header') && orderPath[i].classList.match('form__item_space-h_')) {
  
            let formItemSize = retrieveModSizeFromClassList('form__item_space-h_', i, orderPath);
    
            if (mistake7CompareSize == null) {
                mistake7CompareSize = formItemSize;
            }
            else if ( (mistake7CompareSize - listOfSizes[formItemSize]) != 1 ) {
                
                resultMistakesArray.push({"code": listOfMistakesForm[6]["code"],
                                        "error": listOfMistakesForm[6]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake7CompareSize = null;
            }
        }
        else if (orderPath[i].classList.match('input_size_')) {
          
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
            if (mistake7CompareSize == null) {
                mistake7CompareSize = inputSize;
            }
            else if ( (listOfSizes[inputSize] - mistake7CompareSize) != 1 ) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[6]["code"],
                                        "error": listOfMistakesForm[6]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake7CompareSize = null;
            }
        }
    }
  

    const isExistMistake8 = (i, numberOfForm) => {

        if (orderPath[i].classList.match('form__footer') && orderPath[i].classList.match('form__item_space-v_')) {
  
            let formItemSize = retrieveModSizeFromClassList('form__item_space-v_', i, orderPath);
    
            if (mistake8CompareSize == null) {
                mistake8CompareSize = formItemSize;
            }
            else if (formItemSize != mistake8CompareSize) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[7]["code"],
                                        "error": listOfMistakesForm[7]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake8CompareSize = null;
            }
        }
        else if (orderPath[i].classList.match('input_size_')) {
          
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
            if (mistake8CompareSize == null) {
                mistake8CompareSize = inputSize;
            }
            else if (inputSize != mistake8CompareSize) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[7]["code"],
                                        "error": listOfMistakesForm[7]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake8CompareSize = null;
            }
        }
    }


    const isExistMistake9 = (i, numberOfForm) => {

        if (orderPath[i].classList.match('form__footer') && orderPath[i].classList.match('form__item_space-h_')) {
  
            let formItemSize = retrieveModSizeFromClassList('form__item_space-h_', i, orderPath);
    
            if (mistake9CompareSize == null) {
                mistake9CompareSize = formItemSize;
            }
            else if ( (mistake9CompareSize - listOfSizes[formItemSize]) != 1 ) {
                
                resultMistakesArray.push({"code": listOfMistakesForm[8]["code"],
                                        "error": listOfMistakesForm[8]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake9CompareSize = null;
            }
        }
        else if (orderPath[i].classList.match('input_size_')) {
          
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
            if (mistake9CompareSize == null) {
                mistake9CompareSize = inputSize;
            }
            else if ( (listOfSizes[inputSize] - mistake9CompareSize) != 1 ) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[8]["code"],
                                        "error": listOfMistakesForm[8]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake9CompareSize = null;
            }
        }
    }
  

    const isExistMistake10 = (i, numberOfForm) => {

        if (orderPath[i].classList.match('form__footer') && orderPath[i + 1] && orderPath[i + 1].classList.match('text_size_')) {
          
            let textSize = retrieveModSizeFromClassList('text_size_', i + 1, orderPath);
    
            if (mistake10CompareSize == null) {
                mistake10CompareSize = textSize;
            }
            else if ( textSize != mistake10CompareSize ) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[9]["code"],
                                        "error": listOfMistakesForm[9]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake10CompareSize = null;
            }
        }
        else if (orderPath[i].classList.match('input_size_')) {
  
            let inputSize = retrieveModSizeFromClassList('input_size_', i, orderPath);
    
            if (mistake10CompareSize == null) {
                mistake10CompareSize = inputSize;
            }
            else if ( inputSize != mistake10CompareSize ) {
    
                resultMistakesArray.push({"code": listOfMistakesForm[9]["code"],
                                        "error": listOfMistakesForm[9]["error"]});
    
                resultMistakesArray[resultMistakesArray.length - 1]["location"] = numberOfForm;
                mistake10CompareSize = null;
            }
        }
    }
    


    catchError(orderPath);
    return resultMistakesArray;

}