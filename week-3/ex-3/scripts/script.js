let countOfNumbers   = prompt("Въведете колко на брой числа ще въвеждате.");
let input            = prompt("Въведете числата като ги отделите със запетая.");
let inputArray       = input.split(",");
let result           = [];
let isValidInputTrue = false;

if (validInput(result, inputArray) === false) {

    while (true) {
        countOfNumbers = prompt("Въведете колко на брой числа ще въвеждате.");
        input = prompt("Въведете числата като ги отделите със запетая.");
        inputArray = input.split(",");
        isValidationCorrect = false;
        result = [];
        isValidInputTrue = validInput(result, inputArray) === true;
        if (isValidInputTrue === true) {
            break;
        }
    }
} else {
    validInput(result, inputArray);
}

