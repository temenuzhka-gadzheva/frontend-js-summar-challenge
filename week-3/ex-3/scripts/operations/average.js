let inputArrayLength;
let averageInInputArray;

const average = (inputArray) => {

    inputArrayLength    = inputArray.length;
    averageInInputArray = sumNumbers(inputArray) / inputArrayLength;

    alert(`Средното аритметично на елементите от този списък е : ${averageInInputArray}`);
    return averageInInputArray;

};