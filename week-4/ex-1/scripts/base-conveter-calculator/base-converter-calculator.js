let isBaseConverterOperationsShow = false;
let isTemperatureClicked = false;
let isMoneyClicked = false;
let isClassicClicked = false;
let isReload = false;
let baseConverterCalculator = document.querySelector("#base-converter-calculator");

const baseConverter = (isReload) => {

    isBaseConverterOperationsShow = false;
    isTemperatureClicked = false;
    isMoneyClicked = false;
    isClassicClicked = false;

    baseConverterCalculator = document.querySelector("#base-converter-calculator");

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

        operationalCalculatorButton.disabled = true;
        baseConverterCalculator.disabled = true;
        standardCalculator.disabled = false;

        if (isOperationsContainerShow === false) {
            converterOptions(baseConverterOperationsButtonElement, baseConverterClassicButtonElement, baseConverterTemperatureButtonElement, baseConverterMoneyButtonElement);
        }

        baseConverterOperationsButtonElement.addEventListener("click", () => {

            isOperationsShow = true;
            isHistoryOperationButtonClicked = false;
            history(isOperationsShow, isHistoryOperationButtonClicked);
        });

        baseConverterTemperatureButtonElement.addEventListener("click", () => {

            isTemperatureClicked = true;
            temperature();
        });

        baseConverterMoneyButtonElement.addEventListener("click", () => {
            isMoneyClicked = true;

            baseConverterMoneyButtonElement.style.backgroundColor = "#d5e8d4";
            baseConverterMoneyButtonElement.style.border = "2px solid #97b25b";

            baseConverterTemperatureButtonElement.style.disabled = true;

            moneyConvert();
        });

        baseConverterClassicButtonElement.addEventListener("click", () => {

            location.reload();
        });
    });
}

baseConverter();
