let countOfNumbers        = prompt("Въведете колко на брой числа ще въвеждате.");
let input                 = prompt("Въведете числата като ги отделите със запетая.");
let inputArray            = input.split(",");
let isValidationCorrect   = false;
let isInputCorrect        = true;
let result                = [];


for (let i = 0; i < inputArray.length; i++) {

    let element = inputArray[i];

    if (element > 100 || element < 0) {
        
        isInputCorrect = false;
        alert("Имате некоректно въведено число!" +
            "\n Числата трябва да бъдат в диапазона от 1 до 100 вкючително.")
        break;
    }
}
isValidationCorrect = isInputCorrect === true;

if (isValidationCorrect === true) {
    while (true) {

        result = manager(inputArray);
        if (result === true) {
            alert("Успешно излязохте от програмата!");
            break;
        }
    }
}
else {
    console.error("Невалидни данни !!!!");
}

