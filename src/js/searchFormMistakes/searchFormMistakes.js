
import listOfMistakesForm from '../mistakesList/formMistakes';
import listOfSizes from '../sizesList/sizesList';

export default function(positionOfForms) {
    //console.log('[searchFormMistakes]');

    const resultMistakes = [];

    const mistake1Data = {
        isLabel: false,
        isText: false,
        isTextModFound: false,
        isInput: false,
        isInputModFound: false,
        isButton: false,
        isButtonModFound: false,
        isMistake: false,
        textSize: '',
        inputSize: '',
        buttonSize: ''
    };

    function resetmistake1Data() {
        mistake1Data.isLabel = false;
        mistake1Data.isText = false;
        mistake1Data.isTextModFound = false;
        mistake1Data.isInput = false;
        mistake1Data.isInputModFound = false;
        mistake1Data.isButton = false;
        mistake1Data.isButtonModFound = false;
        mistake1Data.isMistake = false;
        mistake1Data.textSize = '';
        mistake1Data.inputSize = '';
        mistake1Data.buttonSize = '';
    }

    function runValidation() {
        let position = -1;
        positionOfForms.forEach(form => {
            position++;
            //console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            //console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            //console.log(form);
            inspectForm(form);


            if (isMistake1Exist()) {
                //console.log('MISTAKES');
                mistake1Data.isMistake = true;

                let start = {"line": positionOfForms[position].loc.start.line, 
                             "column": positionOfForms[position].loc.start.column};
                let end = {"line": positionOfForms[position].loc.end.line, 
                             "column": positionOfForms[position].loc.end.column};

                resultMistakes.push(
                    {"code": listOfMistakesForm[0]["code"],
                     "error": listOfMistakesForm[0]["error"],
                     "location": {start, end}
                    }
                );
            }
            //console.log(mistake1Data);

            resetmistake1Data();
        })

        //console.log(resultMistakes);
        // return resultMistakes;
    }

    function isArray(arr) {
        return Object.prototype.toString.call(arr) == '[object Array]';
    }

    function isObject(obj) {
        return Object.prototype.toString.call(obj) == '[object Object]';
    }
   
    function inspectForm(object) {
        
        for (let key in object) {

            if (isObject(object[key])) {

                detectMistake1(object[key]);


                inspectForm(object[key],);

            }
            else if (isArray(object[key])) {
                inspectForm(object[key]);
            }
        }

    }

    function detectMistake1(object) {

        findTextSizeMistake1(object);
        findInputSizeMistake1(object);
        findButtonSizeMistake1(object);
    }

    function findTextSizeMistake1(object) {
        if (object.value && object.value == 'label') {
            //console.log(object);
            mistake1Data.isLabel = true;
            mistake1Data.isTextModFound = false;
        }
        else if (object.value && object.value == 'text' && mistake1Data.isLabel && !mistake1Data.isTextModFound) {
            //console.log(object);
            mistake1Data.isText = true;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake1Data.isText) {
                //console.log(object.value);
                mistake1Data.textSize = object.value.value;
                mistake1Data.isLabel = false;
                mistake1Data.isText = false;
                mistake1Data.isTextModFound = true;
                //console.log(mistake1Data);
        }
    }

    function findInputSizeMistake1(object) {
        if (object.value && object.value == 'input') {
            //console.log(object);
            mistake1Data.isInput = true;
            mistake1Data.isInputModFound = false;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake1Data.isInput) {
                //console.log(object.value);
                mistake1Data.inputSize = object.value.value;
                mistake1Data.isInput = false;
                mistake1Data.isInputModFound = true;
                //console.log(mistake1Data);
        }
    }

    function findButtonSizeMistake1(object) {
        if (object.value && object.value == 'button') {
            //console.log(object);
            mistake1Data.isButton = true;
            mistake1Data.isButtonModFound = false;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake1Data.isButton) {
                //console.log(object.value);
                mistake1Data.buttonSize = object.value.value;
                mistake1Data.isButton = false;
                mistake1Data.isButtonModFound = true;
                //console.log(mistake1Data);
        }
    }

    function isMistake1Exist() {
        let textInput = false;
        let textButton = false;
        let inputButton = false;
        let textInputButton = false;
        if (mistake1Data.textSize != '' && mistake1Data.inputSize != '' && mistake1Data.buttonSize == '' &&
            mistake1Data.textSize != mistake1Data.inputSize) {
                textInput = true;
        }
        if (mistake1Data.textSize != '' && mistake1Data.buttonSize != '' && mistake1Data.inputSize == '' &&
            mistake1Data.textSize != mistake1Data.buttonSize) {
                textButton = true;
        }
        if (mistake1Data.inputSize != '' && mistake1Data.buttonSize != '' && mistake1Data.textSize == '' &&
            mistake1Data.inputSize != mistake1Data.buttonSize) {
                inputButton = true;
        }
        if (mistake1Data.textSize != '' && mistake1Data.inputSize != '' && mistake1Data.buttonSize != '' && 
            (mistake1Data.textSize != mistake1Data.inputSize || 
            mistake1Data.textSize != mistake1Data.buttonSize || 
            mistake1Data.inputSize != mistake1Data.buttonSize)) {
                textInputButton = true;
        }
        if (textInput || textButton || inputButton || textInputButton) {
            return true;
        }
        else return false;
    }

    runValidation();
    return resultMistakes;
}