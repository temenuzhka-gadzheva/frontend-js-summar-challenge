let isBaseConverterOperationsShow = false;
let isTemperatureClicked = false;
let isMoneyClicked = false;
let isClassicClicked = false;
const baseConverter = () => {
    let baseConverterCalculator = document.querySelector("#base-converter-calculator");

    let baseConverterOperationsButtonElement = document.createElement("button");
    baseConverterOperationsButtonElement.classList.add("action--converter-operations-button");
    baseConverterOperationsButtonElement.textContent = "operations";

    let baseConverterClassicButtonElement = document.createElement("button");
    baseConverterClassicButtonElement.classList.add("action--converter-type-button");
    baseConverterClassicButtonElement.textContent = "classic";

    let baseConverterTemperatureButtonElement = document.createElement("button");
    baseConverterTemperatureButtonElement.classList.add("action--data-converter-temperature");
    baseConverterTemperatureButtonElement.textContent = "T";

    let baseConverterMoneyButtonElement = document.createElement("button");
    baseConverterMoneyButtonElement.classList.add("action--data-converter-money");
    baseConverterMoneyButtonElement.textContent = "$";

    baseConverterCalculator.addEventListener("click", () => {

        if (isBaseConverterOperationsShow !== true) {

            historyContainer.appendChild(baseConverterOperationsButtonElement);
            historyContainer.appendChild(baseConverterClassicButtonElement);
            historyContainer.appendChild(baseConverterTemperatureButtonElement);
            historyContainer.appendChild(baseConverterMoneyButtonElement);
            isBaseConverterOperationsShow = true;
            baseConverterCalculator.disabled = false;
            operationalCalculatorButton.disabled = true;
            isClassicClicked = false;
            isTemperatureClicked = false;
        }

        baseConverterOperationsButtonElement.addEventListener("click", () => {
            isOperationsShow = true;
            baseConverterCalculator.disabled = true;
            operationalCalculatorButton.disabled = false;
            isTemperatureClicked = false;

            history(isOperationsShow, isBaseConverterOperationsShow);
        });

        baseConverterTemperatureButtonElement.addEventListener("click", () => {
            if (isMoneyClicked !== true) {
                isTemperatureClicked = true;
                temperature();
            }
        });

        isTemperatureClicked = false;

        baseConverterMoneyButtonElement.addEventListener("click", () => {

            if (isTemperatureClicked !== true) {
                baseConverterMoneyButtonElement.style.border = "2px solid #97b25b";
                baseConverterMoneyButtonElement.style.backgroundColor = "#d5e8d4";
                isMoneyClicked = true;
                isTemperatureClicked = false;

                moneyConvert();
            }
        });

        baseConverterClassicButtonElement.addEventListener("click", () => {

            if (isMoneyClicked) {

                let baseOperationsSection = document.querySelector("#base-operations");

                usdCurrencyButtonElement.parentElement.removeChild(usdCurrencyButtonElement);
                eurCurrencyButtonElement.parentElement.removeChild(eurCurrencyButtonElement);
                chfCurrencyButtonElement.parentElement.removeChild(chfCurrencyButtonElement);
                jpyCurrencyButtonElement.parentElement.removeChild(jpyCurrencyButtonElement);
                reverseButtonElement.parentElement.removeChild(reverseButtonElement);

                let baseOperationReset = document.createElement("button");
                let baseOperationBackUp = document.createElement("button");
                let baseOperationMinus = document.createElement("button");
                let baseOperationDivision = document.createElement("button");
                let baseOperationPlus = document.createElement("button");
                let baseOperationMultiply = document.createElement("button");


                baseOperationReset.id = "operation--reset";
                baseOperationBackUp.id = "operation--backup";
                baseOperationMinus.id = "operation--minus";
                baseOperationDivision.id = "operation--division";
                baseOperationPlus.id = "operation--plus";
                baseOperationMultiply.id = "operation--multiplicaiton";

                baseOperationReset.textContent = "C";
                baseOperationBackUp.textContent = "<";
                baseOperationMinus.textContent = "-";
                baseOperationDivision.textContent = "/";
                baseOperationPlus.textContent = "+";
                baseOperationMultiply.textContent = "*";

                baseOperationReset.classList.add("operator");
                baseOperationBackUp.classList.add("operator");
                baseOperationMinus.classList.add("operator");
                baseOperationDivision.classList.add("operator");
                baseOperationPlus.classList.add("operator");
                baseOperationMultiply.classList.add("operator");


                baseOperationsSection.appendChild(baseOperationReset);
                baseOperationsSection.appendChild(baseOperationBackUp);
                baseOperationsSection.appendChild(baseOperationMinus);
                baseOperationsSection.appendChild(baseOperationDivision);
                baseOperationsSection.appendChild(baseOperationPlus);
                baseOperationsSection.appendChild(baseOperationMultiply);
                operatorButtons();

                baseConverterMoneyButtonElement.style.border = null;
                baseConverterMoneyButtonElement.style.backgroundColor = null;
                isMoneyClicked = false;
            }

            baseConverterOperationsButtonElement.parentElement.removeChild(baseConverterOperationsButtonElement);
            baseConverterClassicButtonElement.parentElement.removeChild(baseConverterClassicButtonElement);
            baseConverterTemperatureButtonElement.parentElement.removeChild(baseConverterTemperatureButtonElement);
            baseConverterMoneyButtonElement.parentElement.removeChild(baseConverterMoneyButtonElement);
            isClassicClicked = true;
            isBaseConverterOperationsShow = false;
            baseConverterCalculator.disabled = false;
            operationalCalculatorButton.disabled = false;
            isTemperatureClicked = false;

        });

    });
}

baseConverter();
