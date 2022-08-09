

const smallBigLetter = (symbol, isEvenPosition) => {
    smallLetters = smallLetter(symbol);
    isLetterBig = smallLetters.isBigLetter;

    if (isLetterBig) {
        translatedLetter = capitalLetter(symbol, isEvenPosition);
        isBigLetter = false;
    } else {
        translatedLetter = smallLetters.letter;
        isBigLetter = false;
    }

    return translatedLetter;
}