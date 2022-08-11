let isValidationCorrect = false;

const validInput = (result, inputArray) => {
    isValidationCorrect = inputValidator(inputArray) === true;

    if (isValidationCorrect === true) {
        while (true) {
            result = manager(inputArray);
            if (result === true) {
                alert("Успешно излязохте от програмата!");
                break;
            }
        }
    }

    return isValidationCorrect;

};