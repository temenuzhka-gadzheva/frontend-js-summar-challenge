let isArraySymmetric = true;
let arrayMiddleLength;
let elementInRightSideInArray;

const symmetric = (inputArray) => {
    let element;
    arrayMiddleLength = (inputArray.length + 1) / 2;

    for (let i = 0; i < arrayMiddleLength; i++) {

        element                   = inputArray[i];
        elementInRightSideInArray = inputArray[inputArray.length - i - 1];

        if (element !== elementInRightSideInArray) {
            isArraySymmetric = false;
        }
    }
    if (isArraySymmetric === false) {

        alert(`Масивът: ${inputArray} не е симетричен!`);
        return isArraySymmetric;
    }
    
    alert(`Масивът: ${inputArray}  е симетричен!`);
    return isArraySymmetric;
};