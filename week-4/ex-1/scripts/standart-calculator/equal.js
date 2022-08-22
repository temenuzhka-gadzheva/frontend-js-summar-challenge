
let equalButton = document.querySelector('.operation--equal');

equalButton.addEventListener('click', () => {

    if (isMoneyClicked === true) {
        let currentValue = currentValueElement.value;
        let equationObject;

        itemArray.push(currentValue);

        equationObject = {
            firstOperand: parseFloat(itemArray[0]),
            operation: itemArray[1]
        }

        equationArray.push(equationObject);

       /* let equationString =
            `${equationObject['firstOperand']} 
             ${equationObject['operation']}`;

        console.log(equationString);*/

        previousValueElement.textContent = `${equationObject['firstOperand']} LV = 
                                            ${calculateCurrency(equationObject['firstOperand'],equationObject['operation'])}`;

        historyArray.push(previousValueElement.textContent);
        currentValueElement.value = calculateCurrency(equationObject['firstOperand'],equationObject['operation']);

        isHaveNewNumber = true;
        itemArray = [];
        /* console.log(equationArray);
         console.log(historyArray);
         console.log(equationObject);*/

    }else  if(isTemperatureClicked){
        let currentValue = currentValueElement.value;
        let equationObject;

        itemArray.push(currentValue);

        equationObject = {
            firstOperand: parseFloat(itemArray[0]),
            operation: itemArray[1]
        }

        equationArray.push(equationObject);

       /* let equationString =
            `${equationObject['firstOperand']} 
             ${equationObject['operation']}`;

        console.log(equationString);*/

        previousValueElement.textContent = `${equationObject['firstOperand']} C = 
                                            ${calculateDegrees(equationObject['firstOperand'],equationObject['operation'])}`;

        historyArray.push(previousValueElement.textContent);
        currentValueElement.value = calculateDegrees(equationObject['firstOperand'],equationObject['operation']);

        isHaveNewNumber = true;
        itemArray = [];
    } else {
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
    }

});

