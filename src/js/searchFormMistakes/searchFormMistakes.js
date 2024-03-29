
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
    let mistake1Sizes = [];

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
    let mistake5TextSizes = [];
    let mistake5HeaderLocation = null;

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

    const mistake6Data = {
        isElemHeader: false,
        isInput: false,
        isInputModFound: false,
        isMix: false,
        isElemItem: false,
        isFormSpaceV: false,
        isMistake: false,
        inputSize: '',
        formSpaceSize: '',
        location: null
    };

    const mistake7Data = {
        isElemHeader: false,
        isInput: false,
        isInputModFound: false,
        isMix: false,
        isElemItem: false,
        isFormSpaceH: false,
        isMistake: false,
        inputSize: '',
        formSpaceSize: '',
        location: null
    };

    const mistake8Data = {
        isElemFooter: false,
        isInput: false,
        isInputModFound: false,
        isMix: false,
        isElemItem: false,
        isFormSpaceV: false,
        isMistake: false,
        inputSize: '',
        formSpaceSize: '',
        location: null
    };

    const mistake9Data = {
        isElemFooter: false,
        isInput: false,
        isInputModFound: false,
        isMix: false,
        isElemItem: false,
        isFormSpaceH: false,
        isMistake: false,
        inputSize: '',
        formSpaceSize: '',
        location: null
    };

    const mistake10Data = {
        isFooter: false,
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
        mistake1Sizes = [];
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
        mistake5TextSizes = [];
        mistake5HeaderLocation = null;
    }

    function resetmistake6Data() {
        mistake6Data.isElemHeader = false;
        mistake6Data.isInput = false;
        mistake6Data.isInputModFound = false;
        mistake6Data.isMix = false;
        mistake6Data.isElemItem = false;
        mistake6Data.isFormSpaceV = false;
        mistake6Data.isMistake = false;
        mistake6Data.inputSize = '';
        mistake6Data.formSpaceSize = '';
        mistake6Data.location = null;
    }

    function resetmistake7Data() {
        mistake7Data.isElemHeader = false;
        mistake7Data.isInput = false;
        mistake7Data.isInputModFound = false;
        mistake7Data.isMix = false;
        mistake7Data.isElemItem = false;
        mistake7Data.isFormSpaceH = false;
        mistake7Data.isMistake = false;
        mistake7Data.inputSize = '';
        mistake7Data.formSpaceSize = '';
        mistake7Data.location = null;
    }

    function resetmistake8Data() {
        mistake8Data.isElemFooter = false;
        mistake8Data.isInput = false;
        mistake8Data.isInputModFound = false;
        mistake8Data.isMix = false;
        mistake8Data.isElemItem = false;
        mistake8Data.isFormSpaceV = false;
        mistake8Data.isMistake = false;
        mistake8Data.inputSize = '';
        mistake8Data.formSpaceSize = '';
        mistake8Data.location = null;
    }

    function resetmistake9Data() {
        mistake9Data.isElemFooter = false;
        mistake9Data.isInput = false;
        mistake9Data.isInputModFound = false;
        mistake9Data.isMix = false;
        mistake9Data.isElemItem = false;
        mistake9Data.isFormSpaceH = false;
        mistake9Data.isMistake = false;
        mistake9Data.inputSize = '';
        mistake9Data.formSpaceSize = '';
        mistake9Data.location = null;
    }

    function resetmistake10Data() {
        mistake10Data.isFooter = false;
        mistake10Data.isText = false;
        mistake10Data.isTextModFound = false;
        mistake10Data.isInput = false;
        mistake10Data.isInputModFound = false;
        mistake10Data.isMistake = false;
        mistake10Data.textSize = '';
        mistake10Data.inputSize = '';
        mistake10Data.location = null;
    }


    function runValidation() {
        let position = -1;
        positionOfForms.forEach(form => {
            position++;
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log(`position = ${position}`);
            console.log(form);
            inspectForm(form);


            checkMistake1(position);
            resetmistake1Data();

            checkMistake2();
            resetmistake2Data();

            checkMistake3();
            resetmistake3Data();
      
            checkMistake4(true);
            resetmistake4Data();

            checkMistake5();
            resetmistake5Data();

            checkMistake6();
            resetmistake6Data();

            checkMistake7();
            resetmistake7Data();
            
            checkMistake8();
            resetmistake8Data();
            
            checkMistake9();
            resetmistake9Data();
            
            checkMistake10();
            resetmistake10Data();
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
                detectMistake6(object[key]);
                detectMistake7(object[key]);
                detectMistake8(object[key]);
                detectMistake9(object[key]);
                detectMistake10(object[key]);


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
        if (object.children && object.children.length >= 3 && 
            object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'form' && 
            object.children[1].value &&  
            object.children[1].value.value && object.children[1].value.value == 'label' && 
            object.children[2].key && object.children[2].value && 
            object.children[2].key.value && object.children[2].key.value == 'content') {

            const child = object.children[2].value;
            
            if (child && child.children && child.children.length >= 2 && 
                child.children[0].value && 
                child.children[0].value.value && child.children[0].value.value == 'text' && 
                child.children[1].key && 
                child.children[1].key.value && 
                (child.children[1].key.value == 'mods' || child.children[1].key.value == 'elemMods')) {

                const textMod = child.children[1].value;

                if (textMod && textMod.children && textMod.children.length > 0) {

                    textMod.children.forEach(item => {

                        if (item.key && item.key.value && item.key.value == 'size' && 
                            item.value && item.value.value) {

                            mistake1Data.textSize = item.value.value;
                            mistake1Data.isTextModFound = true;
                            mistake1Sizes.push(item.value.value);
                        }
                    })
                }
            }
        }
    }

    function findInputSizeMistake1(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake1Sizes.push(element.value.value);

                }
            })
        }
    }

    function findButtonSizeMistake1(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'button' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake1Sizes.push(element.value.value);
                }
            })
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

        let isError = false;
        if (mistake1Sizes && mistake1Sizes.length > 1) {
            
            //console.log('-------- before cycle --------');

            for (let i = 0, length = mistake1Sizes.length; i < length - 1; i++) {

                if (mistake1Sizes[i] != mistake1Sizes[i + 1]) {
                    isError = true;
                    // console.log(`isError = ${isError}`);
                }
            }
        }
        else if (mistake1Sizes && mistake1Sizes.length == 0) {
            isError = true;
        }
        return isError;
    }

    function detectMistake2(object) {

        //findContentLocation(object, mistake2Data);
        findContentLocation2(object);

        if (isElementPresent(object, 'content')) {
            mistake2Data.isElemContent = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake2Data.isElemItem = true;
        }

        // if (mistake2Data.isElemContent) {
        //     findInputSizeMistake2(object);
        // }
        findInputSizeMistake2(object);
        findSpaceVSizeMistake2(object);

    }

    function findContentLocation2(object) {
        if (object.children && object.children.length >= 3 && 
            object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'form' && 
            object.children[1].value &&  
            object.children[1].value.value && object.children[1].value.value == 'content') {


            if (isMistake2Exist()) {
                mistake2Data.isMistake = true;
    
                resultMistakes.push(
                    {"code": listOfMistakesForm[1]["code"],
                        "error": listOfMistakesForm[1]["error"],
                        "location": mistake2Data.contentLocation
                    }
                );
            }
            resetmistake2Data();

            mistake2Data.contentLocation = {
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

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake2]');
            // console.log(object);

            const child = object.children[1].value;

            if (mistake2Data.contentLocation && 
                child.loc.start.line < mistake2Data.contentLocation.end.line && 
                child.loc.start.line > mistake2Data.contentLocation.start.line) {

                child.children && child.children.forEach(element => {

                    if (element.key && 
                        element.key.value && element.key.value == 'size' && 
                        element.value && element.value.value) {
    
                        mistake2Data.inputSize = element.value.value;
                        mistake2Data.isInput = false;
                        mistake2Data.isInputModFound = true;
    
                        // console.log('[findInputSizeMistake2]');
                        // console.log(`input size = ${element.value.value}`);
    
                    }
                })
            }
        }
    }

    function findSpaceVSizeMistake2(object) {
 
        if (object.children && object.children.length >= 4 && 
            object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'form' && 
            object.children[1].value &&  
            object.children[1].value.value && object.children[1].value.value == 'content') {

            // size loc: object.loc
            // console.log('[findSpaceVSizeMistake2]');
            // console.log(object);

            for (let i = 2, length = object.children.length; i < length; i++) {

                if (object.children[i].key && object.children[i].value && 
                    object.children[i].key.value && object.children[i].key.value == 'mix') {

                    const child = object.children[i].value;
                
                    // console.log('[findSpaceVSizeMistake2] child');
                    // console.log(child);

                    if (child && child.type == 'Object' && child.children && child.children.length >= 3 && 
                        child.children[0].value && 
                        child.children[0].value.value && child.children[0].value.value == 'form' && 
                        child.children[1].value && 
                        child.children[1].value.value && child.children[1].value.value == 'item' && 
                        child.children[2].key && child.children[2].key.value && 
                        (child.children[2].key.value == 'mods' || child.children[2].key.value == 'elemMods')) {

                        //reach the mods / elemMods
                        const itemMods = child.children[2].value;
                        // console.log('isObject');
                        // console.log(itemMods);

                        if (itemMods && itemMods.children && itemMods.children.length > 0) {
        
                            itemMods.children.forEach(item => {

                                if (item.key && item.key.value && item.key.value == 'space-v' && 
                                    item.value && item.value.value) {

                                    mistake2Data.formSpaceSize = item.value.value;
                                    mistake2Data.isMix = false;
                                    mistake2Data.isFormSpaceV = true;
                                    mistake2Data.isElemItem = false;

                                    //console.log(`mistake2Data.formSpaceSize = ${mistake2Data.formSpaceSize}`);
                                }
                            })
                        }
                    }
                    else if (child && child.type == 'Array' && child.children && child.children.length > 0) {

                        child.children.forEach(element => {

                            if (element.children && element.children.length >= 3 && 
                                element.children[0].value && 
                                element.children[0].value.value && element.children[0].value.value == 'form' && 
                                element.children[1].value && 
                                element.children[1].value.value && element.children[1].value.value == 'item' && 
                                element.children[2].key && element.children[2].key.value && 
                                (element.children[2].key.value == 'mods' || element.children[2].key.value == 'elemMods')) {

                                //reach the mods / elemMods
                                const itemMods = element.children[2].value;
                                // console.log('isArray');
                                // console.log(itemMods);

                                if (itemMods && itemMods.children && itemMods.children.length > 0) {
        
                                    itemMods.children.forEach(item => {

                                        if (item.key && item.key.value && item.key.value == 'space-v' && 
                                            item.value && item.value.value) {

                                            mistake2Data.formSpaceSize = item.value.value;
                                            mistake2Data.isMix = false;
                                            mistake2Data.isFormSpaceV = true;
                                            mistake2Data.isElemItem = false;

                                            //console.log(`mistake2Data.formSpaceSize = ${item.value.value}`);
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            }
        }
    }

    function checkMistake2() {
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
        else if (mistake2Data.isElemContent && mistake2Data.isElemItem && 
                 mistake2Data.inputSize != '' && mistake2Data.formSpaceSize == '') {
            return true;
        }
        else return false;
    }

    function detectMistake3(object) {

        //findContentLocation(object, mistake3Data);
        findContentLocation3(object);

        if (isElementPresent(object, 'content')) {
            mistake3Data.isElemContent = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake3Data.isElemItem = true;
        }
        
        if (mistake3Data.isElemContent) {
            findInputSizeMistake3(object);
        }

        // if (isMix(object, mistake3Data) && mistake3Data.isElemItem) {
        //     findSpaceHSizeMistake3(object);
        // }

        //findInputSizeMistake3(object);
        findSpaceHSizeMistake3(object);

    }

    function findContentLocation3(object) {
        if (object.children && object.children.length >= 3 && 
            object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'form' && 
            object.children[1].value &&  
            object.children[1].value.value && object.children[1].value.value == 'content') {


            if (isMistake3Exist()) {
                mistake3Data.isMistake = true;
    
                resultMistakes.push(
                    {"code": listOfMistakesForm[2]["code"],
                        "error": listOfMistakesForm[2]["error"],
                        "location": mistake3Data.contentLocation
                    }
                );
            }
            resetmistake3Data();


            mistake3Data.contentLocation = {
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

    function findInputSizeMistake3(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            if (mistake3Data.contentLocation && 
                child.loc.start.line < mistake3Data.contentLocation.end.line && 
                child.loc.start.line > mistake3Data.contentLocation.start.line) {

                child.children && child.children.forEach(element => {

                    if (element.key && 
                        element.key.value && element.key.value == 'size' && 
                        element.value && element.value.value) {
    
                        mistake3Data.inputSize = element.value.value;
                        mistake3Data.isInput = false;
                        mistake3Data.isInputModFound = true;
                    }
                })
            }
        }
    }

    function findSpaceHSizeMistake3(object) {

        if (object.children && object.children.length >= 4 && 
            object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'form' && 
            object.children[1].value &&  
            object.children[1].value.value && object.children[1].value.value == 'content') {

            // size loc: object.loc
            // console.log('[findSpaceHSizeMistake3]');
            // console.log(object);

            for (let i = 2, length = object.children.length; i < length; i++) {

                if (object.children[i].key && object.children[i].value && 
                    object.children[i].key.value && object.children[i].key.value == 'mix') {

                    const child = object.children[i].value;
                
                    // console.log('child');
                    // console.log(child);

                    if (child && child.type == 'Object' && child.children && child.children.length >= 3 && 
                        child.children[0].value && 
                        child.children[0].value.value && child.children[0].value.value == 'form' && 
                        child.children[1].value && 
                        child.children[1].value.value && child.children[1].value.value == 'item' && 
                        child.children[2].key && child.children[2].key.value && 
                        (child.children[2].key.value == 'mods' || child.children[2].key.value == 'elemMods')) {

                        //reach the mods / elemMods
                        const itemMods = child.children[2].value;
                        // console.log('isObject');
                        // console.log(itemMods);

                        if (itemMods && itemMods.children && itemMods.children.length > 0) {
        
                            itemMods.children.forEach(item => {

                                if (item.key && item.key.value && item.key.value == 'space-h' && 
                                    item.value && item.value.value) {

                                    mistake3Data.formSpaceSize = item.value.value;
                                    mistake3Data.isMix = false;
                                    mistake3Data.isFormSpaceV = true;
                                    mistake3Data.isElemItem = false;

                                    //console.log(`mistake2Data.formSpaceSize = ${mistake2Data.formSpaceSize}`);
                                }
                            })
                        }
                    }
                    else if (child && child.type == 'Array' && child.children && child.children.length > 0) {

                        child.children.forEach(element => {

                            if (element.children && element.children.length >= 3 && 
                                element.children[0].value && 
                                element.children[0].value.value && element.children[0].value.value == 'form' && 
                                element.children[1].value && 
                                element.children[1].value.value && element.children[1].value.value == 'item' && 
                                element.children[2].key && element.children[2].key.value && 
                                (element.children[2].key.value == 'mods' || element.children[2].key.value == 'elemMods')) {

                                //reach the mods / elemMods
                                const itemMods = element.children[2].value;
                                // console.log('isArray');
                                // console.log(itemMods);

                                if (itemMods && itemMods.children && itemMods.children.length > 0) {
        
                                    itemMods.children.forEach(item => {

                                        if (item.key && item.key.value && item.key.value == 'space-h' && 
                                            item.value && item.value.value) {

                                            mistake3Data.formSpaceSize = item.value.value;
                                            mistake3Data.isMix = false;
                                            mistake3Data.isFormSpaceV = true;
                                            mistake3Data.isElemItem = false;

                                            //console.log(`mistake2Data.formSpaceSize = ${mistake2Data.formSpaceSize}`);
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            }

        }
    }

    function checkMistake3() {
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
        else if (mistake3Data.isElemContent && mistake3Data.isElemItem && 
                mistake3Data.inputSize != '' && mistake3Data.formSpaceSize == '') {
            return true;
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
            
            checkMistake4();
            resetmistake4Data();


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

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake4Data.inputSize = element.value.value;
                    mistake4Data.isInput = false;
                    mistake4Data.isInputModFound = true;
                }
            })
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

    function checkMistake4(last = false) {
        
        if (isMistake4Exist(last)) {
            mistake4Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[3]["code"],
                 "error": listOfMistakesForm[3]["error"],
                 "location": mistake4Data.contentLocation
                }
            );
        }
    }

    function isMistake4Exist(last = false) {

        if (!last && mistake4Data.inputSize != '' && mistake4Data.formIndentSize != '') {
            let inputSize = listOfSizes[mistake4Data.inputSize];
            let formIndentSize = listOfSizes[mistake4Data.formIndentSize];

            if (inputSize != undefined && formIndentSize != undefined && 
                ((formIndentSize - inputSize) == 1)) {
                    return false;
            }
            else return true;
        }
        else if (!last && mistake4Data.inputSize != '' && mistake4Data.formIndentSize == '') {
            return true;
        }
        else if (last && mistake4Data.formIndentSize != '') {
            return true;
        }
        else return false;
    }

    function detectMistake5(object) {

        findHeaderLocation5(object);

        if (isElementPresent(object, 'header')) {
            mistake5Data.isHeader = true;
        }
        
        if (mistake5Data.isHeader) {
            findTextLocation5(object);
            findTextSizeMistake5(object);
        }  
        
        findInputSizeMistake5(object);
    }

    function findHeaderLocation5(object) {
        if (object.children && object.children.length >= 3) {

            if (object.children[0].value && 
                object.children[0].value.value && object.children[0].value.value == 'form' && 
                object.children[1].key && 
                object.children[1].key.value && object.children[1].key.value == 'elem' && 
                object.children[1].value && 
                object.children[1].value.value && object.children[1].value.value == 'header') {
                    
        
                mistake5HeaderLocation = {
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
  
    function findTextLocation5(object) {

        if (object.children && object.children.length >= 2) {


            if (object.children[0].value && 
                object.children[0].value.value && object.children[0].value.value == 'text') {

                //mistake5Data.isHeader = false;
                mistake5Data.isText = false;
                mistake5Data.isTextModFound = false;
                mistake5Data.isMistake = false;
                mistake5Data.textSize = '';
                mistake5Data.location = null;
                // resetmistake5Data();

                if (mistake5HeaderLocation && mistake5HeaderLocation.end.line > object.loc.start.line || 
                    mistake5HeaderLocation == null) {

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
    }

    function findTextSizeMistake5(object) {
        if (object.value && object.value == 'text' && mistake5Data.isHeader && !mistake5Data.isTextModFound && 
            object.loc.start.line < mistake5HeaderLocation.end.line) {
            //console.log(object);
            mistake5Data.isText = true;
        }
        else if (object.key && 
            object.key.value && object.key.value == 'size' && 
            object.value && object.value.value && mistake5Data.isText) {
                
                mistake5Data.textSize = object.value.value;
                mistake5Data.isText = false;
                mistake5Data.isTextModFound = true;

                mistake5TextSizes.push({
                    size: mistake5Data.textSize,
                    location: mistake5Data.location
                });
        }
    }

    function findInputSizeMistake5(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake5Data.inputSize = element.value.value;
                    mistake5Data.isInput = false;
                    mistake5Data.isInputModFound = true;
                }
            })
        }
    }

    function checkMistake5() {

        mistake5TextSizes.forEach(item => {
            if (isMistake5Exist(item.size)) {
                mistake5Data.isMistake = true;

                resultMistakes.push(
                    {"code": listOfMistakesForm[4]["code"],
                     "error": listOfMistakesForm[4]["error"],
                     "location": item.location
                    }
                );
            }
        });
    }

    function isMistake5Exist(textValue) {

        if (mistake5Data.inputSize != '') {
            let inputSize = listOfSizes[mistake5Data.inputSize];
            let textSize = listOfSizes[textValue];

            if (inputSize != undefined && textSize != undefined && 
                ((textSize - inputSize) == 2)) {
                    return false;
            }
            else return true;
        }
        else return false;
        //else return true;
    }

    function detectMistake6(object) {

        findHeaderLocation6(object);

        if (isElementPresent(object, 'header')) {
            mistake6Data.isElemHeader = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake6Data.isElemItem = true;
        }
        
        findInputSizeMistake6(object);

        if (mistake6Data.isElemHeader && isMix(object, mistake6Data) && mistake6Data.isElemItem) {
            findSpaceVSizeMistake6(object);
        }

    }

    function findHeaderLocation6(object) {

        if (object.children && object.children.length >= 3) {

            if (object.children[0].value && 
                object.children[0].value.value && object.children[0].value.value == 'form' && 
                object.children[1].key && 
                object.children[1].key.value && object.children[1].key.value == 'elem' && 
                object.children[1].value && 
                object.children[1].value.value && object.children[1].value.value == 'header') {
        
                mistake6Data.location = {
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

    function findInputSizeMistake6(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake6Data.inputSize = element.value.value;
                    mistake6Data.isInput = false;
                    mistake6Data.isInputModFound = true;
                }
            })
        }
    }

    function findSpaceVSizeMistake6(object) {
        if (object.key && 
            object.key.value && object.key.value == 'space-v' && 
            object.value && object.value.value) {
                //console.log(object.value);
                mistake6Data.formSpaceSize = object.value.value;
                mistake6Data.isMix = false;
                mistake6Data.isFormSpaceV = true;
                mistake6Data.isElemItem = false;
        }
    }

    function checkMistake6() {
        if (isMistake6Exist()) {
            mistake6Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[5]["code"],
                 "error": listOfMistakesForm[5]["error"],
                 "location": mistake6Data.location
                }
            );
        }
    }

    function isMistake6Exist() {

        if (mistake6Data.inputSize != '' && mistake6Data.formSpaceSize != '') {
            let inputSize = listOfSizes[mistake6Data.inputSize];
            let formSpaceSize = listOfSizes[mistake6Data.formSpaceSize];

            if (inputSize != undefined && formSpaceSize != undefined && 
                ((formSpaceSize - inputSize) == 0)) {
                    return false;
            }
            else return true;
        }
        else if (mistake6Data.inputSize != '' && mistake6Data.formSpaceSize == '') {
            return true;
        }
        else return false;
    }

    function detectMistake7(object) {

        findHeaderLocation7(object);

        if (isElementPresent(object, 'header')) {
            mistake7Data.isElemHeader = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake7Data.isElemItem = true;
        }
        
        findInputSizeMistake7(object);

        if (mistake7Data.isElemHeader && isMix(object, mistake7Data) && mistake7Data.isElemItem) {
            findSpaceHSizeMistake7(object);
        }

    }

    function findHeaderLocation7(object) {

        if (object.children && object.children.length >= 3) {

            if (object.children[0].value && 
                object.children[0].value.value && object.children[0].value.value == 'form' && 
                object.children[1].key && 
                object.children[1].key.value && object.children[1].key.value == 'elem' && 
                object.children[1].value && 
                object.children[1].value.value && object.children[1].value.value == 'header') {
        
                mistake7Data.location = {
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

    function findInputSizeMistake7(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake7Data.inputSize = element.value.value;
                    mistake7Data.isInput = false;
                    mistake7Data.isInputModFound = true;
                }
            })
        }
    }

    function findSpaceHSizeMistake7(object) {
        if (object.key && 
            object.key.value && object.key.value == 'space-h' && 
            object.value && object.value.value) {
                //console.log(object.value);
                mistake7Data.formSpaceSize = object.value.value;
                mistake7Data.isMix = false;
                mistake7Data.isFormSpaceH = true;
                mistake7Data.isElemItem = false;
        }
    }

    function checkMistake7() {
        if (isMistake7Exist()) {
            mistake7Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[6]["code"],
                 "error": listOfMistakesForm[6]["error"],
                 "location": mistake7Data.location
                }
            );
        }
    }

    function isMistake7Exist() {

        // console.log(`[isMistake7Exist]`);
        // console.log(`listOfSizes[mistake7Data.inputSize] = ${listOfSizes[mistake7Data.inputSize]}`);
        // console.log(`listOfSizes[mistake7Data.formSpaceSize] = ${listOfSizes[mistake7Data.formSpaceSize]}`);

        if (mistake7Data.inputSize != '' && mistake7Data.formSpaceSize != '') {
            let inputSize = listOfSizes[mistake7Data.inputSize];
            let formSpaceSize = listOfSizes[mistake7Data.formSpaceSize];

            if (inputSize != undefined && formSpaceSize != undefined && 
                ((formSpaceSize - inputSize) == 1)) {
                    return false;
            }
            else return true;
        }
        else return false;
    }

    function detectMistake8(object) {

        findFooterLocation8(object);

        if (isElementPresent(object, 'footer')) {
            mistake8Data.isElemFooter = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake8Data.isElemItem = true;
        }
        
        findInputSizeMistake8(object);

        if (mistake8Data.isElemFooter && isMix(object, mistake8Data) && mistake8Data.isElemItem) {
            findSpaceVSizeMistake8(object);
        }

    }

    function findFooterLocation8(object) {

        if (object.children && object.children.length >= 3) {

            if (object.children[0].value && 
                object.children[0].value.value && object.children[0].value.value == 'form' && 
                object.children[1].key && 
                object.children[1].key.value && object.children[1].key.value == 'elem' && 
                object.children[1].value && 
                object.children[1].value.value && object.children[1].value.value == 'footer') {
        
                mistake8Data.location = {
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

    function findInputSizeMistake8(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake8Data.inputSize = element.value.value;
                    mistake8Data.isInput = false;
                    mistake8Data.isInputModFound = true;
                }
            })
        }
    }

    function findSpaceVSizeMistake8(object) {
        if (object.key && 
            object.key.value && object.key.value == 'space-v' && 
            object.value && object.value.value) {
                //console.log(object.value);
                mistake8Data.formSpaceSize = object.value.value;
                mistake8Data.isMix = false;
                mistake8Data.isFormSpaceV = true;
                mistake8Data.isElemItem = false;
        }
    }

    function checkMistake8() {
        if (isMistake8Exist()) {
            mistake8Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[7]["code"],
                 "error": listOfMistakesForm[7]["error"],
                 "location": mistake8Data.location
                }
            );
        }
    }

    function isMistake8Exist() {

        if (mistake8Data.inputSize != '' && mistake8Data.formSpaceSize != '') {
            let inputSize = listOfSizes[mistake8Data.inputSize];
            let formSpaceSize = listOfSizes[mistake8Data.formSpaceSize];

            if (inputSize != undefined && formSpaceSize != undefined && 
                ((formSpaceSize - inputSize) == 0)) {
                    return false;
            }
            else return true;
        }
        else return false;
    }

    function detectMistake9(object) {

        findHeaderLocation9(object);

        if (isElementPresent(object, 'footer')) {
            mistake9Data.isElemFooter = true;
        }
        if (isElementPresent(object, 'item')) {
            mistake9Data.isElemItem = true;
        }
        
        findInputSizeMistake9(object);

        if (mistake9Data.isElemFooter && isMix(object, mistake9Data) && mistake9Data.isElemItem) {
            findSpaceHSizeMistake9(object);
        }
    }

    function findHeaderLocation9(object) {

        if (object.children && object.children.length >= 3) {

            if (object.children[0].value && 
                object.children[0].value.value && object.children[0].value.value == 'form' && 
                object.children[1].key && 
                object.children[1].key.value && object.children[1].key.value == 'elem' && 
                object.children[1].value && 
                object.children[1].value.value && object.children[1].value.value == 'footer') {
        
                mistake9Data.location = {
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

    function findInputSizeMistake9(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake9Data.inputSize = element.value.value;
                    mistake9Data.isInput = false;
                    mistake9Data.isInputModFound = true;
                }
            })
        }
    }

    function findSpaceHSizeMistake9(object) {
        if (object.key && 
            object.key.value && object.key.value == 'space-h' && 
            object.value && object.value.value) {
                //console.log(object.value);
                mistake9Data.formSpaceSize = object.value.value;
                mistake9Data.isMix = false;
                mistake9Data.isFormSpaceH = true;
                mistake9Data.isElemItem = false;
        }
    }

    function checkMistake9() {
        if (isMistake9Exist()) {
            mistake9Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[8]["code"],
                 "error": listOfMistakesForm[8]["error"],
                 "location": mistake9Data.location
                }
            );
        }
    }

    function isMistake9Exist() {

        // console.log(`[isMistake7Exist]`);
        // console.log(`listOfSizes[mistake7Data.inputSize] = ${listOfSizes[mistake7Data.inputSize]}`);
        // console.log(`listOfSizes[mistake7Data.formSpaceSize] = ${listOfSizes[mistake7Data.formSpaceSize]}`);

        if (mistake9Data.inputSize != '' && mistake9Data.formSpaceSize != '') {
            let inputSize = listOfSizes[mistake9Data.inputSize];
            let formSpaceSize = listOfSizes[mistake9Data.formSpaceSize];

            if (inputSize != undefined && formSpaceSize != undefined && 
                ((formSpaceSize - inputSize) == 1)) {
                    return false;
            }
            else return true;
        }
        else return false;
    }

    function detectMistake10(object) {

        findTextSizeMistake10(object);
        findInputSizeMistake10(object);
    }
  
    function findTextSizeMistake10(object) {

        if (object.children && object.children.length >= 3 && 
            object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'form' && 
            object.children[1].value &&  
            object.children[1].value.value && object.children[1].value.value == 'footer') {

            // console.log('[findTextSizeMistake10]');
            // console.log(object);

            for (let i = 2, length = object.children.length; i < length; i++) {

                if (object.children[i].key && object.children[i].value && 
                    object.children[i].key.value && object.children[i].key.value == 'content') {

                    const child = object.children[i].value;
                    
                    // console.log('child');
                    // console.log(child);

                    if (child && child.type == 'Object' && child.children && child.children.length >= 2 && 
                        child.children[0].value && 
                        child.children[0].value.value && child.children[0].value.value == 'text' && 
                        child.children[1].key && 
                        child.children[1].key.value && 
                        (child.children[1].key.value == 'mods' || child.children[1].key.value == 'elemMods')) {
        
                        const textMod = child.children[1].value;
        
                        if (textMod && textMod.children && textMod.children.length > 0) {
        
                            textMod.children.forEach(item => {
        
                                if (item.key && item.key.value && item.key.value == 'size' && 
                                    item.value && item.value.value) {
        
                                    mistake10Data.textSize = item.value.value;
                                    mistake10Data.isFooter = false;
                                    mistake10Data.isText = false;
                                    mistake10Data.isTextModFound = true;

                                    // console.log('[findTextSizeMistake10] object');
                                    // console.log(child);
                                    mistake10Data.location = {
                                        start: {
                                            "line": child.loc.start.line, 
                                            "column": child.loc.start.column
                                        },
                                        end: {
                                            "line": child.loc.end.line, 
                                            "column": child.loc.end.column
                                        }
                                    };
                                }
                            })
                        }
                    }
                    else if (child && child.type == 'Array' && child.children && child.children.length > 0) {

                        // console.log('isArray');
                        // console.log(child.children);

                        child.children.forEach(element => {

                            // console.log('element');
                            // console.log(element);
                            // console.log(`element.children && element.children >= 2 : ${element.children && element.children.length >= 2}`);
                            // console.log(`element.children[0].value && element.children[0].value.value && element.children[0].value.value == 'text' : ${element.children[0].value && element.children[0].value.value && element.children[0].value.value == 'text'}`);
                            // console.log(`element.children[1].key.value && (element.children[1].key.value == 'mods' || element.children[1].key.value == 'elemMods') : ${element.children[1].key.value && (element.children[1].key.value == 'mods' || element.children[1].key.value == 'elemMods')}`);

                            if (element.children && element.children.length >= 2 && 
                                element.children[0].value && 
                                element.children[0].value.value && element.children[0].value.value == 'text' && 
                                element.children[1].key.value && 
                                (element.children[1].key.value == 'mods' || element.children[1].key.value == 'elemMods')) {

                                const textMod = element.children[1].value;

                                // console.log('textMod');
                                // console.log(textMod);

                                if (textMod && textMod.children && textMod.children.length > 0) {
        
                                    textMod.children.forEach(item => {
                
                                        if (item.key && item.key.value && item.key.value == 'size' && 
                                            item.value && item.value.value) {
                
                                            mistake10Data.textSize = item.value.value;
                                            mistake10Data.isFooter = false;
                                            mistake10Data.isText = false;
                                            mistake10Data.isTextModFound = true;

                                            // console.log('[findTextSizeMistake10] array');
                                            // console.log(element);
                                            mistake10Data.location = {
                                                start: {
                                                    "line": element.loc.start.line, 
                                                    "column": element.loc.start.column
                                                },
                                                end: {
                                                    "line": element.loc.end.line, 
                                                    "column": element.loc.end.column
                                                }
                                            };
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            }
        }
    }

    function findInputSizeMistake10(object) {

        if (object.children && object.children.length >= 2 && 
            object.children[0] && object.children[0].value && 
            object.children[0].value.value && object.children[0].value.value == 'input' && 
            object.children[1] && object.children[1].value && object.children[1].key && 
            object.children[1].key.value && object.children[1].key.value == 'mods') {

            // console.log('[findInputSizeMistake1]');
            // console.log(object);

            const child = object.children[1].value;

            child.children && child.children.forEach(element => {

                if (element.key && 
                    element.key.value && element.key.value == 'size' && 
                    element.value && element.value.value) {

                    mistake10Data.inputSize = element.value.value;
                    mistake10Data.isInput = false;
                    mistake10Data.isInputModFound = true;
                }
            })
        }
    }

    function checkMistake10() {
        if (isMistake10Exist()) {
            //console.log('MISTAKES');
            mistake10Data.isMistake = true;

            resultMistakes.push(
                {"code": listOfMistakesForm[9]["code"],
                 "error": listOfMistakesForm[9]["error"],
                 "location": mistake10Data.location
                }
            );
        }
    }

    function isMistake10Exist() {

        if (mistake10Data.inputSize != '' && mistake10Data.textSize != '') {
            let inputSize = listOfSizes[mistake10Data.inputSize];
            let textSize = listOfSizes[mistake10Data.textSize];

            if (inputSize != undefined && textSize != undefined && 
                ((textSize - inputSize) == 0)) {
                    return false;
            }
            else return true;
        }
        else return false;
    }


    runValidation();
    return resultMistakes;
}