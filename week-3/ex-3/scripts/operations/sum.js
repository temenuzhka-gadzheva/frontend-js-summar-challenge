
const sumNumbers = (inputArray) => {
    let sum = 0;

    inputArray.forEach(number => {
        sum += Number(number);
    });

    console.log(`Сборът от елементите на въведения от Вас списък е: ${sum}`);
    return sum;
};