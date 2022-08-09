let isEvenPosition;
let isLetterBig = false;
let translatedLetter;
let pointsData;
let pointsCount;
let firstPointIndex;
let symbol;
let translatedInterval;
let translatedPoint;
let firstSentanceTranslate;
let nextSentanceTranslate;
let translatedQuestionMark;
let moreThanOneCapitalLetter = false;


const translate = (inputAsCharArray) => {

    pointsData = areThereMoreSentences(inputAsCharArray);
    pointsCount = pointsData.numberOfPoints;
    firstPointIndex = pointsData.pointsIndex[0];
    nextPointIndex = pointsData.pointsIndex[1];
    firstSentanceTranslate = firstSentance(inputAsCharArray, firstPointIndex);

    if (pointsCount > 1) {
        return nextSentanceTranslate = nextSentance(inputAsCharArray, firstPointIndex, nextPointIndex);
    } else {
        return firstSentanceTranslate;
    }

};