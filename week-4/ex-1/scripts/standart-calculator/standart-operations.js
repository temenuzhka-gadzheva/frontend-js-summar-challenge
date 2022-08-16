operationsElement = document.createElement('button');

let standartCalculatorButton = document.querySelector("#standart-calculator");

standartCalculatorButton.addEventListener('click', () => {
    operationsElement.parentElement.removeChild(operationsElement);
});