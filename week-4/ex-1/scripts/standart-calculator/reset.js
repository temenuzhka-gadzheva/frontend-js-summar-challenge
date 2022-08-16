const resetButton = document.querySelectorAll('#operation--reset');

resetButton.forEach(button => {
    button.addEventListener('click', (event) => {

        currentValueElement.value = 0;
        previousValueElement.textContent = '';

        if (event.target.classList.contains('#operation--reset')) {
            itemArray = [];
            equationArray = [];
            historyArray = [];
        }
    });
});