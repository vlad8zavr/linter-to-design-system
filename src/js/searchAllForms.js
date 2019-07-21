
//import bem from './bemdata';
import parse from 'json-to-ast';

// use this to locate mistakes
//console.log(JSON.parse(bem));

// use this to search location
//console.log(bem);


export default function(bem) {
    const abstractArray = parse(bem);
    //console.log('[searchAllForms]');
    //console.log(abstractArray);
    const positionOfForms = [];

    // first block
    if (isObject(abstractArray)) {

        if (abstractArray.type && abstractArray.type == 'Object' && 
            abstractArray.children && abstractArray.children.length >= 1) {

            if (abstractArray.children[0] && abstractArray.children[0].value) {

                if (abstractArray.children[0].value.type && abstractArray.children[0].value.type == 'Literal' && 
                abstractArray.children[0].value.value && abstractArray.children[0].value.value == 'form') {

                    //console.log('3');

                    let isBlock = true;

                    //console.log(abstractArray.children);

                    abstractArray.children.forEach(item => {
                        if (item.key && item.key.value && item.key.value == 'elem') {
                            isBlock = false;
                        }
                    })
                    
                    //console.log(isBlock);

                    if (isBlock) {
                        positionOfForms.push(abstractArray);
                    }

                }

            }
        }
    }


    goThroughJSON(abstractArray);

    function goThroughJSON(object) {
        for (let key in object) {
            
            if (isObject(object[key])) {

                if (object[key].type && object[key].type == 'Object' && 
                    object[key].children && object[key].children.length >= 1) {

                    if (object[key].children[0] && object[key].children[0].value) {

                        if (object[key].children[0].value.type && object[key].children[0].value.type == 'Literal' && 
                            object[key].children[0].value.value && object[key].children[0].value.value == 'form') {

                            //console.log('3');

                            let isBlock = true;

                            //console.log(object[key].children);

                            object[key].children.forEach(item => {
                                if (item.key && item.key.value && item.key.value == 'elem') {
                                    isBlock = false;
                                }
                            })
                            
                            //console.log(isBlock);

                            if (isBlock) {
                                positionOfForms.push(object[key]);
                            }

                        }

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

