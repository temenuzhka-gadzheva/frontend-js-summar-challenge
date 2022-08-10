let isHaveAbbreviation = false;
let sequenceCapitalLettersLength;
const abbreviation = (inputArray, capitalLettersLocation) => {

    let elementInCapitalLocation = capitalLettersLocation[0];
    let capitalLettersLocationlLength = capitalLettersLocation.length;

    let element;
    console.log("First ; " + elementInCapitalLocation);
    for (let i = elementInCapitalLocation; i < capitalLettersLocationlLength; i++) {
        element = capitalLettersLocation[i];
        if(elementInCapitalLocation + 1 === element){
            sequenceCapitalLettersLength +=2;
        }

        console.log("Eelemtns : " + i);

    }
};