const average = (inputArray) => {

    let inputArrayLength    = inputArray.length;
    let averageInInputArray = sumNumbers(inputArray) / inputArrayLength;

    alert(`Средното аритметично на елементите от този списък е : ${averageInInputArray}`);

    return averageInInputArray;
};