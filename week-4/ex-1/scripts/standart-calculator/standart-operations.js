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

    if (isMoneyClicked === true) {

        let resetButtonElement = document.createElement("button");
        let backUpButtonElement = document.createElement("button");
        let minusButtonElement = document.createElement("button");
        let divisionButtonElement = document.createElement("button");
        let plusButtonElement = document.createElement("button");
        let multiplyButtonElement = document.createElement("button");

        resetButtonElement.classList.add("operator");
        backUpButtonElement.classList.add("operator");
        minusButtonElement.classList.add("operator");
        divisionButtonElement.classList.add("operator");
        plusButtonElement.classList.add("operator");
        multiplyButtonElement.classList.add("operator");

        resetButtonElement.id = "operation--reset";
        backUpButtonElement.id = "operation--backup";
        minusButtonElement.id = "operation--minus";
        divisionButtonElement.id = "operation--division";
        plusButtonElement.id = "operation--plus";
        multiplyButtonElement.id = "operation--multiplicaiton";

        resetButtonElement.textContent = "C";
        backUpButtonElement.textContent = "<";
        minusButtonElement.textContent = "-";
        divisionButtonElement.textContent = "/";
        plusButtonElement.textContent = "+";
        multiplyButtonElement.textContent = "*";

        let reverseButton = document.querySelector(".action--converter-reverse-button");
        let allCurrencyElements = document.querySelectorAll("#operator");

        reverseButton.parentElement.removeChild(reverseButton);

        allCurrencyElements.forEach(element => {
            element.parentElement.removeChild(element);
        });

        baseOperationsSection.appendChild(resetButtonElement);
        baseOperationsSection.appendChild(backUpButtonElement);
        baseOperationsSection.appendChild(minusButtonElement);
        baseOperationsSection.appendChild(divisionButtonElement);
        baseOperationsSection.appendChild(plusButtonElement);
        baseOperationsSection.appendChild(multiplyButtonElement);

        isMoneyClicked = false;
    }
});