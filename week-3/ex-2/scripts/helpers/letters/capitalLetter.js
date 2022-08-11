const capitalLetter = (symbol, isEvenPosition) => {

    symbol = baseCapitalLetter(symbol).symbol;

    if (isEvenPosition === true) {
        symbol = `[${symbol}]`;
        return { symbol, isCapitalLetter };
    }

    symbol = `{${symbol}}`;
    return { symbol, isCapitalLetter };

};