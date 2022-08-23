const currentValueElement = document.querySelector('#calculator-screen');
const previousValueElement = document.querySelector('.previous-value');
let itemArray = [];
let equationArray = [];
let historyArray = [];
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
        }
    });
});
