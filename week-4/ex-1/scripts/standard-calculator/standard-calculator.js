let standartCalculatorButton = document.querySelector("#standart-calculator");

const standardCalculator = () => {

    standartCalculatorButton = document.querySelector("#standart-calculator");
    operationsElement = document.createElement('button');

    standartCalculatorButton.addEventListener('click', () => {
        location.reload();
    });
}

standardCalculator();
