const currencyChange = (isMoneyClicked) => {

    if (isMoneyClicked === true) {
        let operatorButton = document.querySelectorAll('.operator');
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
                        `${currentValue} `;

                    return isHaveNewNumber = false;
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

                    let newValue = calculateCurrency(equationObject['firstOperand'], equationObject['operator']);

                    previousValueElement.textContent = `${newValue} 
                                                      ${currentOperator}`;

                    itemArray = [newValue, currentOperator];

                    isHaveNewNumber = true;
                }

            });
        });
    }
}

currencyChange();

