let isUserExit       = false;
let menuOptionsIndex = 0;

const manager = (inputArray) => {

    menuOptionsIndex = prompt("Меню с опции:" +
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

    if      (menuOptionsIndex == 1) return ascendingOrder(inputArray);
    else if (menuOptionsIndex == 2) return descendingOrder(inputArray);
    else if (menuOptionsIndex == 3) return searchByPosition(inputArray);
    else if (menuOptionsIndex == 4) return displacement(inputArray);
    else if (menuOptionsIndex == 5) return sumNumbers(inputArray);
    else if (menuOptionsIndex == 6) return biggestNumber(inputArray);
    else if (menuOptionsIndex == 7) return smallestNumber(inputArray);
    else if (menuOptionsIndex == 8) return average(inputArray);
    else if (menuOptionsIndex == 9) return symmetric(inputArray);
    else if (menuOptionsIndex == 10) return reverse(inputArray);
    else if (menuOptionsIndex == 11) return show(inputArray);
    else if (menuOptionsIndex == 12) {
        isUserExit = true;
        return isUserExit;
    }
   
};