const biggestNumber = (inputArray) => {
       inputArray = descendingOrder(inputArray);
   let biggestNum = inputArray[0];
    
   console.log(`Най-голямото число в този списък е ${biggestNum}`);

    return biggestNum;
}