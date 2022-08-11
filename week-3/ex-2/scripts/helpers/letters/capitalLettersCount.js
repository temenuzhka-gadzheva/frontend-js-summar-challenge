let index;
let isHaveMoreCapitalLetters = false;
let capitalLettersCount      = 0;
let capitalLettersLocation   = [];

const moreCapitalLetters = (inputArray) => {

    let element;
    let itterationsCounter = 0;

    for (let i = 0; i < inputArray.length; i++) {

        element = inputArray[i];
        index = i;

        if (element.match(/^ *$/) !== null)  continue;

        isElementBig = baseCapitalLetter(element).isCapitalLetter === true;

        if (isElementBig === true) {
            [capitalLettersLocation, 
             capitalLettersCount,
             isHaveAbbreviation] = abbreviation(capitalLettersLocation,
                                                itterationsCounter,
                                                capitalLettersCount,
                                                index);
        }
        itterationsCounter++;
    }

    if (capitalLettersCount > 1) {
        isHaveMoreCapitalLetters = true;
    }

    return { isHaveMoreCapitalLetters, capitalLettersCount, capitalLettersLocation, isHaveAbbreviation };
};