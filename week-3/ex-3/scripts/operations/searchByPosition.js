let searchNumber;
let startPosition  = 0;
let endPosition    = 0;
let isNumberFound  = false;
let isMiddleNumberFromArraySearchedNumber;
let isMiddleNumberInTheArrayLessThanSearchedNumber;
let middleInTheArray;

const searchByPosition = (inputArray) => {

    endPosition  = inputArray.length - 1;
    inputArray   = ascendingOrder(inputArray);
    searchNumber = prompt("Моля въведете числото, чиято позиция искате да намерите!");

    while (startPosition <= endPosition) {

        middleInTheArray                                = Math.floor((startPosition + endPosition) / 2);
        isMiddleNumberFromArraySearchedNumber           = inputArray[middleInTheArray] === searchNumber;
        isMiddleNumberInTheArrayLessThanSearchedNumber  = inputArray[middleInTheArray] < searchNumber;

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