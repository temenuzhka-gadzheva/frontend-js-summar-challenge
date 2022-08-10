let biggestNum;
const biggestNumber = (inputArray) => {

    inputArray = descendingOrder(inputArray);
    biggestNum = inputArray[0];

    console.log(`Най-голямото число в този списък е ${biggestNum}`);
    return biggestNum;
}