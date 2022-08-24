let isOperationsContainerShow = false;
let isHistoryOperationButtonClicked = false;
let operationalCalculatorButton = document.querySelector("#operational-calculator");

const historyOperation = () => {

    let historyContainer = document.querySelector(".additional-operations-container");
    let historyElementButton = document.createElement("button");
    operationalCalculatorButton = document.querySelector("#operational-calculator");

    isOperationsContainerShow = false;
    isHistoryOperationButtonClicked = false;
    historyElementButton.classList.add("action--base-operations-button");
    historyElementButton.textContent = "operations";

    operationalCalculatorButton.addEventListener('click', () => {

        operationalCalculatorButton.disabled = true;
        baseConverterCalculator.disabled = true;
        standardCalculator.disabled = false;

        historyContainer.appendChild(historyElementButton);
        isOperationsContainerShow = true;
        isHistoryOperationButtonClicked = true;

        history(isOperationsContainerShow, isHistoryOperationButtonClicked);
    });

}

historyOperation();