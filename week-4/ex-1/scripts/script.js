const currentValueElement = document.querySelector('#calculator-screen');
const previousValueElement = document.querySelector('.previous-value');
let itemArray = [];
let equationArray = [];
let isHaveNewNumber = false;


const numberButtons = document.querySelectorAll('.action--data-number');

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {

        let currentButtonValue = e.target.textContent;

        if (isHaveNewNumber) {
            if (currentButtonValue === ".") {
                currentValueElement.value = "0.";
            } else {
                currentValueElement.value = currentButtonValue;
            }

            /* currentButtonValue === '.'
                 ? "0."
                 : currentButtonValue;*/
            isHaveNewNumber = false;
        } else if (currentValueElement.value.includes('.') &&
            currentButtonValue === '.') {
            return;
        } else {
            let isCorrect = currentValueElement.value == 0 &&
                currentValueElement.value.length == 1 &&
                currentButtonValue !== '.';

            if (isCorrect) {
                currentValueElement.value = currentButtonValue
            } else {
                currentValueElement.value = `${currentValueElement.value}${currentButtonValue}`
            }
            /* currentValueElement.value =
                
                     ? currentButtonValue
                     : `${currentValueElement.value}${currentButtonValue}`;*/
       }
    });
});

const operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(button => {
    button.addEventListener('click', (e) => {

        if (isHaveNewNumber) {
            previousValueElement.textContent = "";
            itemArray = [];
        }

        let currentOperator = e.target.textContent;
        let currentValue = parseFloat(currentValueElement.value);

        if (isNaN(currentValue)) {
            currentValue = 0;
        }

        if (!itemArray.length) {

            itemArray.push(currentValue, currentOperator);

            previousValueElement.textContent =
                `${currentValue} 
                     ${currentOperator}`;

            return isHaveNewNumber = true;
        }

        if (itemArray.length) {

            itemArray.push(currentValue);

            const equationObject = {
                firstOperand: parseFloat(itemArray[0]),
                secondOperand: parseFloat(currentValue),
                operator: itemArray[1]
            }

            equationArray.push(equationObject);
            const equationString =
                `${equationObject['firstOperand']}
                 ${equationObject['operator']} 
                 ${equationObject['secondOperand']}`;

            let newValue = calculate(equationString);

            previousValueElement.textContent = `${newValue} 
                                                ${currentOperator}`;

            itemArray = [newValue, currentOperator];

            isHaveNewNumber = true;
            console.log(equationArray);
        }
    });
});

const equalButton = document.querySelector('.operation--equal');
equalButton.addEventListener('click', () => {

    let currentValue = currentValueElement.value;
    let equationObject;

    if (!itemArray.length &&
        equationArray.length) {

        let lastEquation = equationArray[equationArray.length - 1];

        equationObject = {
            firstOperand: parseFloat(currentValue),
            secondOperand: lastEquation.secondOperand,
            operation: lastEquation.op
        }

    } else if (!itemArray.length) {
        return currentValue;
    } else {

        itemArray.push(currentValue);

        equationObject = {
            firstOperand: parseFloat(itemArray[0]),
            secondOperand: parseFloat(currentValue),
            operation: itemArray[1]
        }
    }

    equationArray.push(equationObject);

    const equationString =
        `${equationObject['firstOperand']} 
         ${equationObject['operation']} 
         ${equationObject['secondOperand']}`;

    previousValueElement.textContent = `${equationString} =`;
    currentValueElement.value = calculate(equationString);

    isHaveNewNumber = true;
    itemArray = [];
    console.log(equationArray);
});

const resetButton = document.querySelectorAll('#operation--reset');
resetButton.forEach(button => {
    button.addEventListener('click', (event) => {

        currentValueElement.value = 0;
        previousValueElement.textContent = '';

        if (event.target.classList.contains('#operation--reset')) {
            itemArray = [];
            equationArray = [];
        }
    });
});

const backUpButton = document.querySelector('#operation--backup');
backUpButton.addEventListener('click', () => {

    currentValueElement.value = currentValueElement.value.slice(0, -1);

    if (!currentValueElement.value.length) {
        currentValueElement.value = 0;
    }
});


const calculate = (equation, currentValueElem) => {
    return eval(equation);
}
