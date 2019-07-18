
import bem from './js/bemdata';
import searchAllForms from './js/searchAllForms';
import getOrderPath from './js/orderPath/orderPath';
import catchFormMistakes from './js/getMistakes/getFormMistakes';

console.log('[index.js]');

function linter(bem) {
    const positionOfForms = searchAllForms(bem);
    console.log(positionOfForms);

    console.log('<><><><><>');
    const classList = getOrderPath(bem);
    console.log(classList);

    const resultMistakesArray = catchFormMistakes(classList);
    console.log(resultMistakesArray);
}
linter(bem);