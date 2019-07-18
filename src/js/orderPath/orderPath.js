
export default function(strbem) {

    let bem = JSON.parse(strbem);

    const orderPath = [];
    const classesArray = [];
    let mixArrayLength = 0;
    let mixPosition = null;

    const isArray = arr => {
        return Object.prototype.toString.call(arr) == '[object Array]';
    }

    const isObject = obj => {
        return Object.prototype.toString.call(obj) == '[object Object]';
    }

    function mainLogic(bem) {
        let order = 0;

        // first block
        createBlock(bem);

        // first in order
        orderPath.unshift({order: 0, block: bem.block});
        
        //other blocks
        goThroughTree(bem, order);

        addTagAndClassListToArray();
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

              if (orderPath[i].order == mixPosition) {
                classesArray[i].classList += ' ' + content;
                mixArrayLength--;
                break;
              }
            }
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

                if (object[key]['mix']) {
                  mixPosition = order; 
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
                orderPath[i].tag = classesArray[i].tag;
                orderPath[i].classList = classesArray[i].classList;
            }
        }
    }

    mainLogic(bem);
    return orderPath;
}