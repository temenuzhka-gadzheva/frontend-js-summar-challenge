let isHaveMorePoints = false;
let pointsCount = 0;
let pointsLocation = [];

const morePoints = (inputArray) => {
    let element;
    for (let i = 0; i < inputArray.length; i++) {
        element = inputArray[i];

        if (element === ".") {
            pointsCount++;
            pointsLocation.push(i);
        }
    }

    if (pointsCount > 1) {
        isHaveMorePoints = true;
    }

    return { isHaveMorePoints, pointsCount, pointsLocation };
};