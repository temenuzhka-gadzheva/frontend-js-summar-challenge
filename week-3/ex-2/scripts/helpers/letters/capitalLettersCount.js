let isHaveMoreCapitalLetters = false;
let capitalLettersCount = 0;
let capitalLettersLocation = [];

const moreCapitalLetters = (inputArray) => {
    let element;
    for (let i = 0; i < inputArray.length; i++) {
        element = inputArray[i];

        if (element.match(/^ *$/) !== null) { continue; }
        console.log("Element: " + element);

        console.log("Capital function: " + baseCapitalLetter(element).isCapitalLetter === true);
        isElementBig = baseCapitalLetter(element).isCapitalLetter === true;
        console.log("Is element capital: " + isElementBig);

        if (isElementBig === true) {
            capitalLettersCount++;
            capitalLettersLocation.push(i);
        }
    }

    console.log("Capital letters location: " + capitalLettersLocation);
    if (capitalLettersCount > 1) {
        if (isHaveAbbreviation === false) {
            abbreviation(inputArray, capitalLettersLocation);
        }
        isHaveMoreCapitalLetters = true;
    }

    return { isHaveMoreCapitalLetters, capitalLettersCount, capitalLettersLocation };
};