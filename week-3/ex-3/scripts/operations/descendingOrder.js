const descendingOrder = (inputArray) => {

   let arrayInDescending = ascendingOrder(inputArray).reverse();
    console.log(`Подредба на списъка в низходящ ред ${arrayInDescending}`);
    
    return arrayInDescending;
};