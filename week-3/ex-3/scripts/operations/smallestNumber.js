const smallestNumber = (inputArray) => {

       inputArray  = ascendingOrder(inputArray);
   let smallestNum = inputArray[0];

    console.log(`Най-малкото число в този списък е ${smallestNum}`);
    return smallestNum;
}