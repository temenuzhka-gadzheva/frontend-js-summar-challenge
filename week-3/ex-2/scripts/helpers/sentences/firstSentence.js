let translatedSymbol;
let isEvenPosition;
let translatedSentence = [];
let isElementBig;

const firstSentence = (inputArray, firstPointLocation, capitalLettersLocation, pointsCount) => {

    let element;
    let isCapitalLettersLocaitonContainsIndex;
    let isCapitalLettersLoctionLengthMoreThanOne;

    for (let i = 0; i < firstPointLocation; i++) {

        isEvenPosition = i % 2 === 0;
        element        = inputArray[i];

        if (element.match(/^ *$/) !== null) {
            translatedSymbol = interval(element, isEvenPosition);
            translatedSentence.push(translatedSymbol);
        } else if (element === "?") {
            translatedSymbol = questionMark(element);
            translatedSentence.push(translatedSymbol);
        } else {

            isElementBig = capitalLetter(element, isEvenPosition).isCapitalLetter === true;

            if (isElementBig === true) {

                isCapitalLettersLocaitonContainsIndex    = capitalLettersLocation.includes(i) === true;
                isCapitalLettersLoctionLengthMoreThanOne = capitalLettersLocation.length > 1 === true;

                if (isCapitalLettersLoctionLengthMoreThanOne && isCapitalLettersLocaitonContainsIndex) {
                    translatedSymbol = element;
                    translatedSentence.push(translatedSymbol);
                } else {

                    translatedSymbol = capitalLetter(element, isEvenPosition).symbol;
                    translatedSentence.push(translatedSymbol);
                     if(pointsCount > 1){
                        translatedSymbol = `[(${capitalLetterCounter})]`;
                        translatedSentence.push(translatedSymbol);
                     }

                    capitalLetterCounter++;
                }
            } else {
                translatedSymbol = smallLetter(element).symbol;
                translatedSentence.push(translatedSymbol);
            }
        }
    }

    return translatedSentence.join("");
};