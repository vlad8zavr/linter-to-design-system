
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

    const mistake2Data = {
        isElemContent: false,
        isInput: false,
        isInputModFound: false,
        isMix: false,
        isElemItem: false,
        isFormSpaceV: false,
        isMistake: false,
        inputSize: '',
        formSpaceSize: '',
        contentLocation: null
    };

    const mistake3Data = {
        isElemContent: false,
        isInput: false,
        isInputModFound: false,
        isMix: false,
        isElemItem: false,
        isFormSpaceV: false,
        isMistake: false,
        inputSize: '',
        formSpaceSize: '',
        contentLocation: null
    };

    const mistake4Data = {
        isElemContent: false,
        isInput: false,
        isInputModFound: false,
        isMix: false,
        isElemItem: false,
        isFormIndentB: false,
        isMistake: false,
        inputSize: '',
        formIndentSize: '',
        contentLocation: null
    };

    const mistake5Data = {
        isHeader: false,
        isText: false,
        isTextModFound: false,
        isInput: false,
        isInputModFound: false,
        isMistake: false,
        textSize: '',
        inputSize: '',
        location: null
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

    function resetmistake2Data() {
        mistake2Data.isElemContent = false;
        mistake2Data.isInput = false;
        mistake2Data.isInputModFound = false;
        mistake2Data.isMix = false;
        mistake2Data.isElemItem = false;
        mistake2Data.isFormSpaceV = false;
        mistake2Data.isMistake = false;
        mistake2Data.inputSize = '';
        mistake2Data.formSpaceSize = '';
        mistake2Data.contentLocation = null;
    }

    function resetmistake3Data() {
        mistake3Data.isElemContent = false;
        mistake3Data.isInput = false;
        mistake3Data.isInputModFound = false;
        mistake3Data.isMix = false;
        mistake3Data.isElemItem = false;
        mistake3Data.isFormSpaceV = false;
        mistake3Data.isMistake = false;
        mistake3Data.inputSize = '';
        mistake3Data.formSpaceSize = '';
        mistake3Data.contentLocation = null;
    }

    function resetmistake4Data() {
        mistake4Data.isElemContent = false;
        mistake4Data.isInput = false;
        mistake4Data.isInputModFound = false;
        mistake4Data.isMix = false;
        mistake4Data.isElemItem = false;
        mistake4Data.isFormIndentB = false;
        mistake4Data.isMistake = false;
        mistake4Data.inputSize = '';
        mistake4Data.formIndentSize = '';
        mistake4Data.contentLocation = null;
    }

    function resetmistake5Data() {
        mistake5Data.isHeader = false;
        mistake5Data.isText = false;
        mistake5Data.isTextModFound = false;
        mistake5Data.isInput = false;
        mistake5Data.isInputModFound = false;
        mistake5Data.isMistake = false;
        mistake5Data.textSize = '';
        mistake5Data.inputSize = '';
        mistake5Data.location = null;
    }

    function runValidation() {
        let position = -1;
        positionOfForms.forEach(form => {
            position++;
            // console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            // console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            // console.log(form);
            inspectForm(form);

            if (hasFormContent(form)) {
                mistake2Data.contentLocation = {
                    start: {
                        "line": form.children[1].loc.start.line, 
                        "column": form.children[1].loc.start.column
                    },
                    end: {
                        "line": form.children[1].loc.end.line, 
                        "column": form.children[1].loc.end.column
                    }
                };
                mistake3Data.contentLocation = {
                    start: {
                        "line": form.children[1].loc.start.line, 
                        "column": form.children[1].loc.start.column
                    },
                    end: {
                        "line": form.children[1].loc.end.line, 
                        "column": form.children[1].loc.end.column
                    }
                };    
            }

            checkMistake1(position);
            checkMistake2(position);
            checkMistake3(position);
            checkMistake4(position);
            checkMistake5(position);

            // console.log(mistake1Data);
            // console.log(mistake2Data);

            resetmistake1Data();
            resetmistake2Data();
            resetmistake3Data();
            resetmistake4Data();
            resetmistake5Data();
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
                detectMistake2(object[key]);
                detectMistake3(object[key]);
                detectMistake4(object[key]);
                detectMistake5(object[key]);


                inspectForm(object[key]);

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

    function checkMistake1(position) {
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

    function detectMistake2(object) {

        if (isElementPresent(object, 'content')) {
            mistake2Data.isElemContent = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake2Data.isElemItem = true;
        }
        

        if (mistake2Data.isElemContent) {
            findInputSizeMistake2(object);
        }

        if (isMix(object, mistake2Data) && mistake2Data.isElemItem) {
            findSpaceVSizeMistake2(object);
        }

    }

    function hasFormContent(object) {
        if (object.children && object.children.length == 2) {
            
            if (object.children[0].value) {

                if (object.children[0].value.value && object.children[0].value.value == 'form') {
    
                    if (object.children[1].key && 
                        object.children[1].key.value && object.children[1].key.value == 'content') {
                            return true;
                    }
                    else return false;
                }
                else return false;
            }
            else return false;
        }
        else return false;
    }

    function isElementPresent(object, value) {
        if (object.key && 
            object.key.value && object.key.value == 'elem' && 
            object.value && 
            object.value.value && object.value.value == value) {
                return true;
        }
    }

    function isMix(object, mistakeArray) {
        if (object.value == 'mix') {
            mistakeArray.isMix = true;
        }
        return mistakeArray.isMix;
    }

    function findInputSizeMistake2(object) {
        if (object.value && object.value == 'input') {
            //console.log(object);
            mistake2Data.isInput = true;
            mistake2Data.isInputModFound = false;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake2Data.isInput) {
                //console.log(object.value);
                mistake2Data.inputSize = object.value.value;
                mistake2Data.isInput = false;
                mistake2Data.isInputModFound = true;
                // console.log('[findInputSizeMistake2] value');
                // console.log(mistake2Data.inputSize);
        }
    }

    function findSpaceVSizeMistake2(object) {
    
        if (object.key && 
            object.key.value && object.key.value == 'space-v' && 
            object.value && object.value.value) {
                //console.log(object.value);
                mistake2Data.formSpaceSize = object.value.value;
                mistake2Data.isMix = false;
                mistake2Data.isFormSpaceV = true;
                mistake2Data.isElemItem = false;
        }
    }

    function checkMistake2(position) {
        if (isMistake2Exist()) {
            mistake2Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[1]["code"],
                 "error": listOfMistakesForm[1]["error"],
                 "location": mistake2Data.contentLocation
                }
            );
        }
    }

    function isMistake2Exist() {

        if (mistake2Data.inputSize != '' && mistake2Data.formSpaceSize != '') {
            let inputSize = listOfSizes[mistake2Data.inputSize];
            let formSpaceSize = listOfSizes[mistake2Data.formSpaceSize];

            if (inputSize != undefined && formSpaceSize != undefined && 
                ((formSpaceSize - inputSize) == 2)) {
                    return false;
            }
            else return true;
        }
        else return false;
    }

    function detectMistake3(object) {

        if (isElementPresent(object, 'content')) {
            mistake3Data.isElemContent = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake3Data.isElemItem = true;
        }
        

        if (mistake3Data.isElemContent) {
            findInputSizeMistake3(object);
        }

        if (isMix(object, mistake3Data) && mistake3Data.isElemItem) {
            findSpaceHSizeMistake3(object);
        }

    }

    function findInputSizeMistake3(object) {
        if (object.value && object.value == 'input') {
            //console.log(object);
            mistake3Data.isInput = true;
            mistake3Data.isInputModFound = false;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake3Data.isInput) {

                mistake3Data.inputSize = object.value.value;
                mistake3Data.isInput = false;
                mistake3Data.isInputModFound = true;
        }
    }

    function findSpaceHSizeMistake3(object) {
    
        if (object.key && 
            object.key.value && object.key.value == 'space-h' && 
            object.value && object.value.value) {
                //console.log(object.value);
                mistake3Data.formSpaceSize = object.value.value;
                mistake3Data.isMix = false;
                mistake3Data.isFormSpaceV = true;
                mistake3Data.isElemItem = false;
        }
    }

    function checkMistake3(position) {
        if (isMistake3Exist()) {
            mistake3Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[2]["code"],
                 "error": listOfMistakesForm[2]["error"],
                 "location": mistake3Data.contentLocation
                }
            );
        }
    }

    function isMistake3Exist() {

        if (mistake3Data.inputSize != '' && mistake3Data.formSpaceSize != '') {
            let inputSize = listOfSizes[mistake3Data.inputSize];
            let formSpaceSize = listOfSizes[mistake3Data.formSpaceSize];

            if (inputSize != undefined && formSpaceSize != undefined && 
                ((formSpaceSize - inputSize) == 1)) {
                    return false;
            }
            else return true;
        }
        else return false;
    }

    function detectMistake4(object) {

        findContentItemLocation(object);
        if (isElementPresent(object, 'content-item')) {
            mistake4Data.isElemContent = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake4Data.isElemItem = true;
        }
        

        if (mistake4Data.isElemContent) {
            findInputSizeMistake4(object);
        }

        if (isMix(object, mistake4Data) && mistake4Data.isElemItem) {
            findIndentBSizeMistake4(object);
        }

    }

    function findContentItemLocation(object) {

        if (object.children && object.children.length >= 3 && 
            object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'form' && 
            object.children[1].value &&  
            object.children[1].value.value && object.children[1].value.value == 'content-item') {

            mistake4Data.contentLocation = {
                start: {
                    "line": object.loc.start.line, 
                    "column": object.loc.start.column
                },
                end: {
                    "line": object.loc.end.line, 
                    "column": object.loc.end.column
                }
            };

        }
    }

    function findInputSizeMistake4(object) {
        if (object.value && object.value == 'input') {
            //console.log(object);
            mistake4Data.isInput = true;
            mistake4Data.isInputModFound = false;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake4Data.isInput) {

                mistake4Data.inputSize = object.value.value;
                mistake4Data.isInput = false;
                mistake4Data.isInputModFound = true;
        }
    }

    function findIndentBSizeMistake4(object) {
    
        if (object.key && 
            object.key.value && object.key.value == 'indent-b' && 
            object.value && object.value.value) {
                //console.log(object.value);
                mistake4Data.formIndentSize = object.value.value;
                mistake4Data.isMix = false;
                mistake4Data.isFormIndentB = true;
                mistake4Data.isElemItem = false;
        }
    }

    function checkMistake4(position) {
        if (isMistake4Exist()) {
            mistake4Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[3]["code"],
                 "error": listOfMistakesForm[3]["error"],
                 "location": mistake4Data.contentLocation
                }
            );
        }
    }

    function isMistake4Exist() {

        if (mistake4Data.inputSize != '' && mistake4Data.formIndentSize != '') {
            let inputSize = listOfSizes[mistake4Data.inputSize];
            let formIndentSize = listOfSizes[mistake4Data.formIndentSize];

            if (inputSize != undefined && formIndentSize != undefined && 
                ((formIndentSize - inputSize) == 1)) {
                    return false;
            }
            else return true;
        }
        else return false;
    }

    function detectMistake5(object) {

        findTextLocation5(object);
        findTextSizeMistake5(object);
        findInputSizeMistake5(object);
    }
  
    function findTextLocation5(object) {

        if (object.children && object.children.length >= 2) {

            if (object.children[0].value && 
                object.children[0].value.value && object.children[0].value.value == 'text') {
        
                mistake5Data.location = {
                    start: {
                        "line": object.loc.start.line, 
                        "column": object.loc.start.column
                    },
                    end: {
                        "line": object.loc.end.line, 
                        "column": object.loc.end.column
                    }
                };
            }
        }
    }

    function findTextSizeMistake5(object) {
        if (object.value && object.value == 'header') {
            //console.log(object);
            mistake5Data.isHeader = true;
            mistake5Data.isTextModFound = false;
        }
        else if (object.value && object.value == 'text' && mistake5Data.isHeader && !mistake5Data.isTextModFound) {
            //console.log(object);
            mistake5Data.isText = true;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake5Data.isText) {
                //console.log(object.value);
                mistake5Data.textSize = object.value.value;
                mistake5Data.isHeader = false;
                mistake5Data.isText = false;
                mistake5Data.isTextModFound = true;
                //console.log(mistake1Data);
        }
    }

    function findInputSizeMistake5(object) {
        if (object.value && object.value == 'input') {
            //console.log(object);
            mistake5Data.isInput = true;
            mistake5Data.isInputModFound = false;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake5Data.isInput) {
                //console.log(object.value);
                mistake5Data.inputSize = object.value.value;
                mistake5Data.isInput = false;
                mistake5Data.isInputModFound = true;
                //console.log(mistake1Data);
        }
    }

    function checkMistake5(position) {
        if (isMistake5Exist()) {
            //console.log('MISTAKES');
            mistake5Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[4]["code"],
                 "error": listOfMistakesForm[4]["error"],
                 "location": mistake5Data.location
                }
            );
        }
    }

    function isMistake5Exist() {

        if (mistake5Data.inputSize != '' && mistake5Data.textSize != '') {
            let inputSize = listOfSizes[mistake5Data.inputSize];
            let textSize = listOfSizes[mistake5Data.textSize];

            if (inputSize != undefined && textSize != undefined && 
                ((textSize - inputSize) == 2)) {
                    return false;
            }
            else return true;
        }
        else return false;
    }





    runValidation();
    return resultMistakes;
}