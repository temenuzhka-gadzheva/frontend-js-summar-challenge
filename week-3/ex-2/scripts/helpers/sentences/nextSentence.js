let capitalLetterCounter = 1;
const nextSentenceTranslation = (inputArray, firstPointLocation, nextPointLocation, capitalLettersLocation) => {

    let element;
    let isCapitalLettersLocaitonContainsIndex;
    let isCapitalLettersLoctionLengthMoreThanOne;

    for (let i = firstPointLocation; i <= nextPointLocation; i++) {

        isEvenPosition = i % 2 === 0;
        element        = inputArray[i];

        if (element.match(/^ *$/) !== null) {
            translatedSymbol = interval(element, isEvenPosition);
            translatedSentence.push(translatedSymbol);
        } else if (element === ".") {
            translatedSymbol = point(element);
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

                    translatedSymbol = `[(${capitalLetterCounter})]`;
                    translatedSentence.push(translatedSymbol);

                    capitalLetterCounter++;
                }
            } else {
                translatedSymbol = smallLetter(element).symbol;
                translatedSentence.push(translatedSymbol);
            }
        }
    }

    return translatedSentence.join("");
}