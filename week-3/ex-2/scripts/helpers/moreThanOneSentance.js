let numberOfPoints = 0;
let pointsIndex = [];

const areThereMoreSentences = (inputAsCharArray) => {
    for (let i = 0; i < inputAsCharArray.length; i++) {
        let symbol = inputAsCharArray[i];

        if (symbol === ".") {
            numberOfPoints++;
            pointsIndex.push(i);
        }
    }

    return { numberOfPoints, pointsIndex };
};