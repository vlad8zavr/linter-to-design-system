
import searchAllForms from './js/searchAllForms';
import searchFormMistakes from './js/searchFormMistakes/searchFormMistakes';
import searchTextMistakes from './js/searchTextMistakes/searchTextMistakes';

    
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
        window.lint = lint;
    }
    else if (!!isNode()) {
        global.lint = lint;
    }
}
createGlobalVariable();
    



// uncomment this section to run tests
// export const lint = (bem) => {
//     const positionOfForms = searchAllForms(bem);
//     //console.log(positionOfForms);

//     let resultMistakes = searchFormMistakes(positionOfForms);

//     resultMistakes = searchTextMistakes(bem, resultMistakes);

//     //console.log(resultMistakes);
//     return resultMistakes;
// }