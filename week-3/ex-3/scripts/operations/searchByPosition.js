const searchByPosition = (inputArray) => {

    let startPosition  = 0;
    let isNumberFound  = false;
    let endPosition    = inputArray.length - 1;
    let searchNumber   = prompt("Моля въведете числото, чиято позиция искате да намерите!");
        inputArray     = ascendingOrder(inputArray);

    while (startPosition <= endPosition) {

       let middleInTheArray                                = Math.floor((startPosition + endPosition) / 2);
       let isMiddleNumberFromArraySearchedNumber           = inputArray[middleInTheArray] === searchNumber;
       let isMiddleNumberInTheArrayLessThanSearchedNumber  = inputArray[middleInTheArray] < searchNumber;

        if (isMiddleNumberFromArraySearchedNumber === true) {
            
            isNumberFound = true;
            alert(`Числото ${searchNumber}, което  веведохте, се намира на позиция ${middleInTheArray}`);
            return middleInTheArray;

        } else if (isMiddleNumberInTheArrayLessThanSearchedNumber === true) {
            startPosition = middleInTheArray + 1;
        } else {
            endPosition = middleInTheArray - 1;
        }
    }
    
    alert(`Числото ${searchNumber}, което  веведохте, не се съдържа в този списък от елементи`);;
    return isNumberFound;
};