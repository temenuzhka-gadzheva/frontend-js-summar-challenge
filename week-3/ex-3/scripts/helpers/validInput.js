let isValidationCorrect                 = false;
let shouldContinueWithNumberOperations  = true;

const validInput = (result, inputArray) => {

    isValidationCorrect = inputValidator(inputArray) === true;
    if (isValidationCorrect) {
        while (shouldContinueWithNumberOperations) {
            
            result = manager(inputArray);
            if (shouldContinueWithNumberOperations === false) break;
            shouldContinueWithNumberOperations = confirm("Желаете ли да продължите към менюто с операциите?");
        }
    }

    return isValidationCorrect;
};


