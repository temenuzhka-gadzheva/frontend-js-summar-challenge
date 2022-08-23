const temperatureChange = (isTemperatureClicked) => {

    if (isTemperatureClicked === true) {
        let operatorButton = document.querySelectorAll('.operator');
        operatorButton.forEach(button => {
            button.addEventListener('click', (e) => {

                if (isHaveNewNumber) {
                    previousValueElement.textContent = "";
                    itemArray = [];
                }

                // let userCurrencyValue = 


                // currency
                let currentOperator = e.target.textContent;
                // console.log(currentOperator);
                // value
                let currentValue = parseFloat(currentValueElement.value);


                if (isNaN(currentValue)) {
                    currentValue = 0;
                }

                if (!itemArray.length) {

                    itemArray.push(currentValue, currentOperator);

                    previousValueElement.textContent =
                        `${currentValue} `;

                    // console.log(previousValueElement);
                    return isHaveNewNumber = false;
                }

                if (itemArray.length) {

                    itemArray.push(currentValue);
                    const equationObject = {
                        firstOperand: parseFloat(itemArray[0]),
                        secondOperand: parseFloat(currentValue),
                        operator: itemArray[1]
                    }
                    // console.log("Object " + equationObject);

                    equationArray.push(equationObject);

                    const equationString =
                        `${equationObject['firstOperand']}
                       ${equationObject['operator']} 
                       ${equationObject['secondOperand']}`;

                    let newValue = calculateCurrency(equationObject['firstOperand'], equationObject['operator']);
                    console.log(newValue);

                    previousValueElement.textContent = `${newValue} 
                                                      ${currentOperator}`;

                    itemArray = [newValue, currentOperator];

                    isHaveNewNumber = true;
                }

            });
        });
    }
}

temperatureChange();

