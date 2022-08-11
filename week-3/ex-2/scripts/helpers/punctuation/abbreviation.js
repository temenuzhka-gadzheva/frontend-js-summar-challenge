let isHaveAbbreviation = false;

const abbreviation = (capitalLettersLocation, itterationsCounter, capitalLettersCount, position) => {

    let isCapitalLettersLocationLengthZero;
    let areSequence;

    if (itterationsCounter >= 1) {

        let lastCapitalLetterElement       = capitalLettersLocation[capitalLettersLocation.length - 1];
        isCapitalLettersLocationLengthZero = capitalLettersLocation.length === 0;
        areSequence                        = Number(lastCapitalLetterElement) + 1 === position;

        if (isCapitalLettersLocationLengthZero || areSequence ) {
            capitalLettersLocation.push(position);
            capitalLettersCount++;
        } else {
            capitalLettersLocation = [];
            capitalLettersLocation.push(position);
            capitalLettersCount++;
        }
    } else {
        capitalLettersLocation.push(position);
        capitalLettersCount++;
    }

    if(capitalLettersLocation.length >= 2){
       isHaveAbbreviation = true;
    }
    return [capitalLettersLocation, capitalLettersCount, isHaveAbbreviation];
};