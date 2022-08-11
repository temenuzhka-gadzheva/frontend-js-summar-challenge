let pointsData;
let capitalLettersData;
let firstPointLocation;
let nextPointLocation;
let firstSentenceTranslation;

const translate = (inputArray) => {

    [isHaveMorePoints, pointsCount, pointsLocation] = morePoints(inputArray);

    firstPointLocation  = pointsLocation[0];
    nextPointLocation   = pointsLocation[1];
    capitalLettersData  = moreCapitalLetters(inputArray);
    capitalLettersCount = capitalLettersData.capitalLettersCount;
    isHaveAbbreviation  = capitalLettersData.isHaveAbbreviation;

    firstSentenceTranslation = firstSentence(inputArray, firstPointLocation, capitalLettersData.capitalLettersLocation, pointsCount);

    if (pointsCount > 1) {
        return nextSentenceTranslation(inputArray, 
                                       firstPointLocation, 
                                       nextPointLocation, 
                                       capitalLettersData.capitalLettersLocation, 
                                       capitalLettersCount)
    } else if (pointsCount === 0) {
        firstPointLocation = inputArray.length;

        return firstSentence(inputArray, 
                             firstPointLocation, 
                             capitalLettersData.capitalLettersLocation);
    }
    return firstSentenceTranslation;

};