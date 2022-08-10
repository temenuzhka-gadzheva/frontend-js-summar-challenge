const ascendingOrder = (inputArray) => {
    console.log(`Подредба на списъка във възходящ ред: ${inputArray.sort((a, b) => a - b)}`);
    return inputArray.sort((a, b) => a - b);
};