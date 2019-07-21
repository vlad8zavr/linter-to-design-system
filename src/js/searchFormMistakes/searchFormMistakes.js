
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

    function runValidation() {
        let position = -1;
        positionOfForms.forEach(form => {
            position++;
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log(form);
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
                }
                // console.log('---------------------------------------------------');
                // console.log('[detectMistake2] mistake2Data.contentLocation = ');
                // console.log(mistake2Data.contentLocation);
                // console.log('---------------------------------------------------');
    
            }

            checkMistake1(position);
            checkMistake2(position);

            // console.log(mistake1Data);
            // console.log(mistake2Data);

            resetmistake1Data();
            resetmistake2Data();
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

        // if (hasFormContent(object)) {
        //     mistake2Data.contentLocation = {
        //         start: {
        //             "line": object.children[1].loc.start.linee, 
        //             "column": object.children[1].loc.start.column
        //         },
        //         end: {
        //             "line": object.children[1].loc.end.line, 
        //             "column": object.children[1].loc.end.column
        //         }
        //     }
        //     console.log('---------------------------------------------------');
        //     console.log('[detectMistake2] mistake2Data.contentLocation = ');
        //     console.log(mistake2Data.contentLocation);
        //     console.log('---------------------------------------------------');

        // }

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

                // console.log('------------------------------------------------------------');
                // console.log('[hasFormContent] object.children.length == 2');
                // console.log('object.children[0].value');
                // console.log(object.children[0].value);
                // console.log('------------------------------------------------------------');

                if (object.children[0].value.value && object.children[0].value.value == 'form') {
    
                    // console.log('------------------------------------------------------------');
                    // console.log('[hasFormContent] object.children.length == 2');
                    // console.log("object.children[0].value.value == 'form'");
                    // console.log('------------------------------------------------------------');
    
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

    function isElementPresent(object, value, element) {
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

            // let start = {"line": positionOfForms[position].loc.start.line, 
            //              "column": positionOfForms[position].loc.start.column};
            // let end = {"line": positionOfForms[position].loc.end.line, 
            //              "column": positionOfForms[position].loc.end.column};

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

    runValidation();
    return resultMistakes;
}