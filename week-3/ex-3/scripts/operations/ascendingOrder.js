const ascendingOrder = (inputArray) => {
    
   let arrayInAscending = inputArray.sort((a, b) => a - b);
    console.log(`Подредба на списъка във възходящ ред: ${arrayInAscending}`);

    return arrayInAscending;
};