const resetValueOfCalculator = () => {
    let resetButton = document.querySelector('#operation--reset');
    resetButton.addEventListener('click', (e) => {
        currentValueElement.value = 0;
        previousValueElement.textContent = '';
        itemArray = [];
        equationArray = [];
        historyArray = [];
    });
}

resetValueOfCalculator();

