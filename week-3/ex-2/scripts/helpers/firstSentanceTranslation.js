const firstSentance = (inputAsCharArray, firstPointIndex) => {

    for (let i = 0; i < firstPointIndex; i++) {
        symbol = inputAsCharArray[i];
        isEvenPosition = i % 2 === 0;
        if (symbol.match(/^ *$/) !== null) {
            translatedInterval = interval(symbol, isEvenPosition);
            translatedResult.push(translatedInterval);
        } else if (symbol === "?") {
            translatedQuestionMark = questionMark(symbol);
            translatedResult.push(translatedQuestionMark);
        } else {
            translatedLetter = smallBigLetter(symbol, isEvenPosition);
            translatedResult.push(translatedLetter);
        }
    }
    return translatedResult.join("");
}