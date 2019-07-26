
import bem from './js/bemdata';
import searchAllForms from './js/searchAllForms';
import searchFormMistakes from './js/searchFormMistakes/searchFormMistakes';
import searchTextMistakes from './js/searchTextMistakes/searchTextMistakes';

//export default function(bem) {

// function linter(bem) {
    
    const lint = (bem) => {
        const positionOfForms = searchAllForms(bem);
        //console.log(positionOfForms);

        let resultMistakes = searchFormMistakes(positionOfForms);

        resultMistakes = searchTextMistakes(bem, resultMistakes);

        //console.log(resultMistakes);
        return resultMistakes;
    }

    function isBrowser() {
        try {
            return window;
        }
        catch {
            return false;
        }
    }

    function isNode() {
        try {
            return global
        }
        catch {
            return false;
        }
    }
    
    function createGlobalVariable() {
        if (!!isBrowser()) {
            //console.log('<><><><><> BROWSER <><><><><>');
    
            window.lint = lint;
        }
        else if (!!isNode()) {
            //console.log('<><><><><> NODE <><><><><>');
    
            global.lint = lint;
        }
    }
    createGlobalVariable();
    
// }
//linter(bem);


// test issues
// export const lint = (bem) => {
//     const positionOfForms = searchAllForms(bem);
//     //console.log(positionOfForms);

//     let resultMistakes = searchFormMistakes(positionOfForms);

//     resultMistakes = searchTextMistakes(bem, resultMistakes);

//     //console.log(resultMistakes);
//     return resultMistakes;
// }