let translatedResult = [];
const nextSentance = (inputAsCharArray, firstPointIndex, nextPointIndex) => {

    for (let i = firstPointIndex; i <= nextPointIndex; i++) {
        symbol = inputAsCharArray[i];
        isEvenPosition = i % 2 === 0;

        if (symbol === ".") {
            translatedPoint = pointPunctuation(symbol);
            translatedResult.push(translatedPoint);
        } else if (symbol === "?") {
            translatedQuestionMark = questionMark(symbol);
            translatedResult.push(translatedQuestionMark);
        } else if (symbol.match(/^ *$/) !== null) {
            continue;
        } else {
            translatedLetter = smallBigLetter(symbol, isEvenPosition);
            translatedResult.push(translatedLetter);
        }
    }
    return translatedResult.join("");
}