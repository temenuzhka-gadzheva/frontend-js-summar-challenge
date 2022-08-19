
let equalButton = document.querySelector('.operation--equal');
equalButton.addEventListener('click', () => {

    let currentValue = currentValueElement.value;
    let equationObject;

    if (!itemArray.length &&
        equationArray.length) {

        let lastEquation = equationArray[equationArray.length - 1];

        equationObject = {
            firstOperand: parseFloat(currentValue),
            secondOperand: lastEquation.secondOperand,
            operation: lastEquation.operation
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

    let equationString =
        `${equationObject['firstOperand']} 
         ${equationObject['operation']} 
         ${equationObject['secondOperand']}`;

    previousValueElement.textContent = `${equationString} = 
                                        ${calculate(equationString)}`;
                                        
    historyArray.push(previousValueElement.textContent);
    currentValueElement.value = calculate(equationString);

    isHaveNewNumber = true;
    itemArray = [];
    console.log(equationArray);
    console.log(historyArray);
});
