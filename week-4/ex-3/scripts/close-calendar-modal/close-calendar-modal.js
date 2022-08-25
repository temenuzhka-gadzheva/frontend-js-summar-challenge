const closeModal = () => {
    
    eventTitle.classList.remove('saved-event');
    addEventModal.style.display = 'none';
    deleteEventModal.style.display = 'none';
    backDropModal.style.display = 'none';
    eventTitle.value = '';
    clicked = null;
    load();
};

closeModal();