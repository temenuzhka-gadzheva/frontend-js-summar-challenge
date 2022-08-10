const descendingOrder = (inputArray) => {
    console.log(`Подредба на списъка във низходящ ред ${ascendingOrder(inputArray).reverse()}`);
    return ascendingOrder(inputArray).reverse();
};