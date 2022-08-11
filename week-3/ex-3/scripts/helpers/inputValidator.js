const inputValidator = (inputArray) => {

    let element;
    let isInputCorrect   = true;

    for (let i = 0; i < inputArray.length; i++) {

        element = inputArray[i];

        if (element > 100 || element < 0) {

            isInputCorrect = false;
            alert("Имате некоректно въведено число!" +
                "\n Числата трябва да бъдат в диапазона от 1 до 100 вкючително.")
            break;
        }
    }

    return isInputCorrect;
};