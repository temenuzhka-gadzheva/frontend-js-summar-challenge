const openModal = (date, addEventModal, deleteEventModal, backDropModal) => {

    clicked = date;

    const eventForDay = events.find(e => e.date === clicked);


    if (eventForDay) {
        let eventName = document.querySelector('.event-name');

        eventName.textContent = eventForDay.title;
        deleteEventModal.style.display = 'block';
        
    } else {
        addEventModal.style.display = 'block';
    }

    backDropModal.style.display = 'block';
};