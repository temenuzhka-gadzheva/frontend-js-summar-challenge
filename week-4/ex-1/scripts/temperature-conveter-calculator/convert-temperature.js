const  temperatureChange = (isTemperatureClicked) => {

    if (isTemperatureClicked === true) {
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
                let isResetButtonCliked = reset();
                console.log(isResetButtonCliked);
                
                if (isResetButtonCliked) {
                    itemArray = [];
                    equationArray = [];
                    historyArray = [];
                    isResetButtonCliked = false;
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
                     console.log("Object " + equationObject);

                    equationArray.push(equationObject);

                    const equationString =
                        `${equationObject['firstOperand']}
                       ${equationObject['operator']} 
                       ${equationObject['secondOperand']}`;

                    let newValue = calculateDegrees(equationObject['firstOperand'], equationObject['operation'])
                    previousValueElement.textContent = `${newValue} 
                                                      ${currentOperator}`;

                    itemArray = [newValue, currentOperator];

                    isHaveNewNumber = true;
                }

            });
        });
    }
};