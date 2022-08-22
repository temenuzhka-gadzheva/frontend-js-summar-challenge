const exchangeRateUSD = 0.5133;
const exchangeRateEUR = 0.51129;
const exchangeRateCHF = 0.49225;
const exchangeRateJPY = 70.2767;

const calculateCurrency = (money, currency) => {

    let result = 0;

    switch (currency) {
        case "USD":
            result = `${money * exchangeRateUSD} USD`;
            break;
        case "EUR":
            result = `${money * exchangeRateEUR} EUR`;
            break;
        case "CHF":
            result = `${money * exchangeRateCHF} CHF`;
            break;
        case "JPY":
            result = `${money * exchangeRateJPY} JPY`;
            break;
    }

    return result;
};
