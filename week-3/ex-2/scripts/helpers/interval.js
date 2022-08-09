const interval = (symbol, isEvenPosition) => {

    if (isEvenPosition) {
        symbol = "___";
    }
    else {
        symbol = "***";
    }

    return symbol;
}