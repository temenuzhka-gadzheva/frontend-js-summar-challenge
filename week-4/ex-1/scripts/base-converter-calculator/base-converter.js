let isBaseConverterOperationsShow = false;
let isTemperatureClicked = false;
let isMoneyClicked = false;

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


        baseConverterOperationsButtonElement.addEventListener("click", () => {
            historyContainer.appendChild(historyElementButton);
            isOperationsShow = true;
            baseConverterCalculator.disabled = true;
            operationalCalculatorButton.disabled = false;
            history(isOperationsShow);
        });

        baseConverterTemperatureButtonElement.addEventListener("click", () => {
            if (isMoneyClicked !== true) {
                isTemperatureClicked = true;
                temperature();
                console.log("1");
            }
        });

        baseConverterMoneyButtonElement.addEventListener("click", () => {

            if (isTemperatureClicked !== true) {
                baseConverterMoneyButtonElement.style.border = "2px solid #97b25b";
                baseConverterMoneyButtonElement.style.backgroundColor = "#d5e8d4";
                isMoneyClicked = true;
                moneyConvert();
            }
        });
    }

});