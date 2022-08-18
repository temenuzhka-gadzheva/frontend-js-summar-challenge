let standartCalculatorButton = document.querySelector("#standart-calculator");

operationsElement = document.createElement('button');

standartCalculatorButton.addEventListener('click', () => {

    baseConverterCalculator.disabled = false;
    operationalCalculatorButton.disabled = false;
    if (isOperationsShow === true) {
        historyElementButton.parentElement.removeChild(historyElementButton);
        isOperationsShow = false;
    }

    if (isBaseConverterOperationsShow === true) {
        baseConverterOperationsButtonElement.parentElement.removeChild(baseConverterOperationsButtonElement);
        baseConverterClassicButtonElement.parentElement.removeChild(baseConverterClassicButtonElement);
        baseConverterTemperatureButtonElement.parentElement.removeChild(baseConverterTemperatureButtonElement);
        baseConverterMoneyButtonElement.parentElement.removeChild(baseConverterMoneyButtonElement);
        isBaseConverterOperationsShow = false;
    }
});