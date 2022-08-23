const operatorButtons = () => {

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
            }
        });
    });
}
operatorButtons();