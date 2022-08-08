let translatedResult     = [];
let isEvenPosition;
let isLetterBig          = false;    
let translatedLetter;


const translate = (inputAsCharArray) => {

    for (let i = 0; i < inputAsCharArray.length; i++) {
        let letter = inputAsCharArray[i];
        
        isEvenPosition = i % 2 === 0;
        data           = smallLetter(letter);
        isLetterBig    = data.isBigLetter;

        if (isLetterBig) {
            translatedLetter = capitalLetter(letter, isEvenPosition);
            isBigLetter      = false;
        } else {
            translatedLetter = data.letter;
            isBigLetter      = false;
        }

        translatedResult.push(translatedLetter);
    }

    return translatedResult.join("");
};