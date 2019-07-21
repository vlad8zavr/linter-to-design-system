
import listOfMistakesForm from '../mistakesList/formMistakes';

export default function(resultMistakesArray, positionOfForms) {

    function setPosition(resultMistakesArray, positionOfForms) {

        resultMistakesArray.forEach(mistakeItem => {

            // first mistake
            if (mistakeItem["code"] == listOfMistakesForm[0]["code"]) {
                let position = mistakeItem["location"];
                
                let start = {"line": positionOfForms[position].loc.start.line, 
                             "column": positionOfForms[position].loc.start.column};
                let end = {"line": positionOfForms[position].loc.end.line, 
                             "column": positionOfForms[position].loc.end.column};

                mistakeItem["location"] = {start, end};
            }

            // second and third mistakes
            if (mistakeItem["code"] == listOfMistakesForm[1]["code"] || mistakeItem["code"] == listOfMistakesForm[2]["code"]) {
                let position = mistakeItem["location"];

                if (positionOfForms[position].children) {
                    positionOfForms[position].children.forEach(child => {
                        if (child.key && child.key.value && child.key.value == "content") {

                            let start = {"line": child.loc.start.line, 
                                         "column": child.loc.start.column};
                            let end = {"line": child.loc.end.line, 
                                       "column": child.loc.end.column};

                            mistakeItem["location"] = {start, end};
                        }
                    })
                }
            }
        })
    }
    setPosition(resultMistakesArray, positionOfForms);
    return resultMistakesArray;
}