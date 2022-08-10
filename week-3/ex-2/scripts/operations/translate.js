let pointsData;
let capitalLettersData;
let firstPointLocation;
let nextPointLocation;
let firstSentenceTranslation;

const translate = (inputArray) => {

    pointsData = morePoints(inputArray);
    pointsCount = pointsData.pointsCount;
    firstPointLocation = pointsData.pointsLocation[0];
    nextPointLocation = pointsData.pointsLocation[1];

    capitalLettersData = moreCapitalLetters(inputArray);
    capitalLettersCount = capitalLettersData.capitalLettersCount;

    /*console.log("Capital letters: " + capitalLettersCount);*/


    firstSentenceTranslation = firstSentence(inputArray, firstPointLocation);

    if (pointsCount > 1) {
        return "Have more sentences!!!";
    } else if (pointsCount === 0) {
        firstPointLocation = inputArray.length + 1;
        return firstSentence(inputArray, firstPointLocation);
    }
    return firstSentenceTranslation;

};