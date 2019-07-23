
import parse from 'json-to-ast';
import listOfMistakesText from '../mistakesList/textMistakes';

export default function(bem, resultMistakes) {

    const abstractArray = parse(bem);

    let isH1Present = false;
    let isH2Present = false;
    let isH3Present = false;

    function isArray(arr) {
        return Object.prototype.toString.call(arr) == '[object Array]';
    }

    function isObject(obj) {
        return Object.prototype.toString.call(obj) == '[object Object]';
    }


    function goThroughJSON(object) {
        for (let key in object) {

            if (isObject(object[key])) {

                
                findTextHeader(object[key]);


                goThroughJSON(object[key]);
            }
            else if (isArray(object[key])) {

                goThroughJSON(object[key]);
            }
        }
    }

    function findTextHeader(object) {
        if (object.children && object.children.length >= 2) {

            if (object.children[0].value && 
                object.children[0].value.value && object.children[0].value.value == 'text') {

                if (object.children[1].key && 
                    object.children[1].key.value && object.children[1].key.value == 'mods') {

                    if (object.children[1].value && 
                        object.children[1].value.children && object.children[1].value.children.length > 0) {

                        object.children[1].value.children.forEach(child => {
                            if (child.key && 
                                child.key.value && child.key.value == 'type') {

                                checkHeader1(child, object);
                                checkHeader2(child, object);
                                checkHeader3(child, object);
                                

                            }
                        })
                    }
                }
            }
        }
    }

    function isHeader(child, value) {
        return child.value && child.value.value && child.value.value == value;
    }

    function checkHeader1(child, object) {
        if (isHeader(child, 'h1')) {

            if (!isH1Present) {
                isH1Present = true;
            }
            else {
                let start = {
                    "line": object.loc.start.line, 
                    "column": object.loc.start.column
                };
                let end = {
                    "line": object.loc.end.line, 
                    "column": object.loc.end.column
                };

                resultMistakes.push(
                    {"code": listOfMistakesText[0]["code"],
                     "error": listOfMistakesText[0]["error"],
                     "location": {start, end}
                    }
                );
            }

            // console.log('=================================================================');
            // console.log('[-findTextHeader-]');
            // console.log(object);

        }
    }

    function checkHeader2(child, object) {
        if (isHeader(child, 'h2')) {

            isH2Present = true;

            if (!isH1Present) {
                let start = {
                    "line": object.loc.start.line, 
                    "column": object.loc.start.column
                };
                let end = {
                    "line": object.loc.end.line, 
                    "column": object.loc.end.column
                };

                resultMistakes.push(
                    {"code": listOfMistakesText[1]["code"],
                     "error": listOfMistakesText[1]["error"],
                     "location": {start, end}
                    }
                );
            }

            // console.log('=================================================================');
            // console.log('[-findTextHeader-]');
            // console.log(object);
        }
    }

    function checkHeader3(child, object) {
        if (isHeader(child, 'h3')) {

            isH3Present = true;

            if (!isH2Present) {
                let start = {
                    "line": object.loc.start.line, 
                    "column": object.loc.start.column
                };
                let end = {
                    "line": object.loc.end.line, 
                    "column": object.loc.end.column
                };

                resultMistakes.push(
                    {"code": listOfMistakesText[2]["code"],
                     "error": listOfMistakesText[2]["error"],
                     "location": {start, end}
                    }
                );
            }
        }
    }

    
    
    goThroughJSON(abstractArray);
    return resultMistakes;
}