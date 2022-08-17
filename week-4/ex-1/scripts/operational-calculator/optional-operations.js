let rootContainerElement = document.querySelector(".root");
let operationsElement = document.createElement('button');
let historyContainer = document.querySelector(".history-container");
let operationalCalculatorButton = document.querySelector("#operational-calculator");
let isOperationsShow = false;

operationsElement.classList.add("history");
operationsElement.textContent = "operations";
operationsElement.style.float = "right";

operationalCalculatorButton.addEventListener('click', () => {
    historyContainer.appendChild(operationsElement);
    isOperationsShow = true;
    history(isOperationsShow);
});