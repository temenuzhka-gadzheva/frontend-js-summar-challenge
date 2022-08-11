let isUserExit = false;
let operationResult;

const manager = (inputArray) => {

    let menuOptionsIndex = prompt("Меню с опции:" +
        "\n  1.Сортиране на въведените числа във възходящ ред" +
        "\n  2.Сортиране на въведените числа в низходящ ред" +
        "\n  3.Търсене на позиция на конкретно число" +
        "\n  4.Разбъркване на числата" +
        "\n  5.Изчисляване на сбора на всички числа" +
        "\n  6.Намиране на най-голямото число" +
        "\n  7.Намиране на най-малкото число" +
        "\n  8.Намиране средно-аритметично на числата" +
        "\n  9.Проверка за симетричност на масива от числа" +
        "\n 10.Обръщане на масива от числа" +
        "\n 11.Визуализирай въведените числа" +
        "\n 12.Изход");

    if (menuOptionsIndex == 1) {
        operationResult = ascendingOrder(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 2) {
        operationResult = descendingOrder(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 3) {
        operationResult = searchByPosition(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 4) {
        operationResult = displacement(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 5) {
        operationResult = sumNumbers(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 6) {
        operationResult = biggestNumber(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 7) {
        operationResult = smallestNumber(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 8) {
        operationResult = average(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 9) {
        operationResult = symmetric(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 10) {
        operationResult = reverse(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (menuOptionsIndex == 11) {
        operationResult = show(inputArray);
        if (exitFromProgram() === true) {
            return isUserExit;
        }
        return operationResult;
    } else if (exitFromProgram() === true) {
        return isUserExit;
    } else if (menuOptionsIndex == 12) {
        isUserExit = true;
        return isUserExit;
    }

    return alert("Не поддържаме тази операция!!!");
};