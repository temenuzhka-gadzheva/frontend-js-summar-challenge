let myCollection = [3,5,2];
let symbolsCollection = ["a", "b", "c", 1, 10, 8, 7, 10];
let lengthResult = 5;
let newCollection = [];

function randomSymbol(symbolsCollection) {
    let symbol;
    let currentElement;
    let symbolsLenght = symbolsCollection.length;
    let isSymbolFind = false;
    let indexRandom = randomIndex(symbolsCollection);
    while (isSymbolFind === false) {

        for (let i = 0; i < symbolsLenght; i++) {
            currentElement = symbolsCollection[i];
            if (i === indexRandom) {
                symbol = currentElement;
                isSymbolFind = true;
                break;
            }
        }
    }
    return symbol;

}

function randomIndex(symbolsCollection) {
    let max = symbolsCollection.length;
    return Math.floor(Math.random() * (max - 0) + 0);
}

function customFill(myCollection, symbolsCollection, lengthResult) {
    if (myCollection.length > lengthResult) {
        let currentElement;
        for (let i = 0; i < lengthResult; i++) {
            currentElement = myCollection[i];
            newCollection.push(currentElement);
        }
        myCollection = [];
        myCollection = newCollection;
        return myCollection;
    }
    while (myCollection.length < lengthResult) {
        myCollection.push(randomSymbol(symbolsCollection));
    }

    return myCollection;
}

console.log(customFill(myCollection, symbolsCollection, lengthResult));


