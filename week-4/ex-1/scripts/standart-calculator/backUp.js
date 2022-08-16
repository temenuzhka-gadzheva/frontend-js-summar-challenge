const backUpButton = document.querySelector('#operation--backup');
backUpButton.addEventListener('click', () => {
    currentValueElement.value = currentValueElement.value.slice(0, -1);

    if (!currentValueElement.value.length) {
        currentValueElement.value = 0;
    }
});
