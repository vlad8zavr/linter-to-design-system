
//import bem from './bemdata';
import parse from 'json-to-ast';

// use this to locate mistakes
//console.log(JSON.parse(bem));

// use this to search location
//console.log(bem);


export default function(bem) {
    const abstractArray = parse(bem);

    const positionOfForms = [];

    goThroughJSON(abstractArray);


    function goThroughJSON(object) {
        for (let key in object) {
            
            if (isObject(object[key])) {

                if (object[key].type && object[key].type == 'Object' && 
                    object[key].children && object[key].children.length >= 1 && 
                    object[key].children[0] && object[key].children[0].value && 
                    object[key].children[0].value.type && object[key].children[0].value.type == 'Literal' && 
                    object[key].children[0].value.value && object[key].children[0].value.value == 'form') {
                    
                    let isBlock = true;

                    object[key].children.forEach(item => {
                        if (item.key && item.key.value && item.key.value == 'elem') {
                            isBlock = false;
                        }
                    })
                    
                    if (isBlock) {
                        
                        positionOfForms.push(object[key]);

                        // positionOfForms.push({"start": { 
                        //                         "column": object[key].loc.start.column, 
                        //                         "line": object[key].loc.start.line 
                        //                     },
                        //                     "end": { 
                        //                         "column": object[key].loc.end.column, 
                        //                         "line": object[key].loc.end.line 
                        //                     }
                        //                 });
                    }
                    
                }

                goThroughJSON(object[key]);
            }
            else if (isArray(object[key])) {

                goThroughJSON(object[key]);
            }
        
        }
    }

    function isArray(arr) {
        return Object.prototype.toString.call(arr) == '[object Array]';
    }

    function isObject(obj) {
        return Object.prototype.toString.call(obj) == '[object Object]';
    }

    return positionOfForms;
}

