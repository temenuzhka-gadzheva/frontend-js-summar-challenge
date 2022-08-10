let inputArrayLenght;
const randomPositionGenerator = (inputArray) => {

    inputArrayLenght = inputArray.length;

    return Math.random() * (inputArrayLenght - 0) + 0;
};