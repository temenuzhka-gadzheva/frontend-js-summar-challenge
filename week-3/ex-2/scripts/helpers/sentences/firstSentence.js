let translatedSymbol;
let isEvenPosition;
let translatedSentence = [];
let isElementBig;

const firstSentence = (inputArray, firstPointLocation) => {
    let element;
    for (let i = 0; i < firstPointLocation; i++) {
        isEvenPosition = i % 2 === 0;
        element = inputArray[i];
        if (element.match(/^ *$/) !== null) {
            translatedSymbol = interval(element, isEvenPosition);
            translatedSentence.push(translatedSymbol);
        } else if (element === "?") {
            translatedSymbol = questionMark(element);
            translatedSentence.push(translatedQuestionMark);
        } else {
            isElementBig = capitalLetter(element, isEvenPosition).isCapitalLetter === true;

            if (isElementBig === true) {
                translatedSymbol = capitalLetter(element,isEvenPosition).symbol;
                translatedSentence.push(translatedSymbol);
            } else {
                translatedSymbol = smallLetter(element).symbol;
                translatedSentence.push(translatedSymbol);
            }
        }
    }

    return translatedSentence.join("");
};