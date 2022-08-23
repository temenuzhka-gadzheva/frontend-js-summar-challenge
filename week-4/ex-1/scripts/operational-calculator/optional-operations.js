let historyContainer = document.querySelector(".additional-operations-container");
let operationalCalculatorButton = document.querySelector("#operational-calculator");
let isOperationsShow = false;

let historyElementButton = document.createElement("button");

historyElementButton.classList.add("action--base-operations-button");
historyElementButton.textContent = "operations";

operationalCalculatorButton.addEventListener('click', () => {
    historyContainer.appendChild(historyElementButton);
    isOperationsShow = true;
    baseConverterCalculator.disabled = true;
    operationalCalculatorButton.disabled = false;
    isBaseConverterOperationsShow = false;
    history(isOperationsShow, isBaseConverterOperationsShow);
});
