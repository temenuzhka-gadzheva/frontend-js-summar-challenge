let standartCalculatorButton = document.querySelector("#standart-calculator");
operationsElement = document.createElement('button');

standartCalculatorButton.addEventListener('click', () => {
    calculatorElement.style.display = "block";
    operationsElement.parentElement.removeChild(operationsElement);
});