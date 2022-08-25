const modalButtons = () => {

    let saveButton = document.querySelector('.save-event-button');
    let cancelButton = document.querySelector('.cancel-event-button');
    let deleteButton = document.querySelector('.delete-event-button');
    let closeButton = document.querySelector('.close-event-button');

    saveButton.addEventListener('click', saveEvent);
    cancelButton.addEventListener('click', closeModal);
    deleteButton.addEventListener('click', removeEvent);
    closeButton.addEventListener('click', closeModal);
};

modalButtons();
