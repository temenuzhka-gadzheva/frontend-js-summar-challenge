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

    switch (menuOptionsIndex) {
        case "1":
            ascendingOrder(inputArray);
            break;
        case "2":
            descendingOrder(inputArray);
            break;
        case "3":
            searchByPosition(inputArray);
            break;
        case "4":
            displacement(inputArray);
            break;
        case "5":
            sumNumbers(inputArray);
            break;
        case "6":
            biggestNumber(inputArray);
            break;
        case "7":
            smallestNumber(inputArray);
            break;
        case "8":
            average(inputArray);
            break;
        case "9":
            symmetric(inputArray);
            break;
        case "10":
            reverse(inputArray);
            break;
        case "11":
            show(inputArray);
            break;
        case "12":
            exitFromProgram();
            break;
        default:
            alert("Не поддържаме тази операция!!!");
            break;
    }
};
