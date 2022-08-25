const saveEvent = () => {

  let eventTitleValue = eventTitle.value;

  if (eventTitleValue) {
    eventTitle.classList.remove('saved-event');

    events.push({
      date: clicked,
      title: eventTitleValue,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();

  } else {
    eventTitle.classList.add('saved-event');
  }
};