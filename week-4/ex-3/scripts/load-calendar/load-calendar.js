let navigateThroughTheMonths = 0;
let clicked = null;
let events = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : [];

let calendar = document.querySelector(".calendar");
let addEventModal = document.querySelector(".add-event-modal");
let deleteEventModal = document.querySelector(".remove-event-modal");
let backDropModal = document.querySelector(".modal-back-drop");
let eventTitle = document.querySelector(".event-title");
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const load = () => {

    let date = new Date();

    if (navigateThroughTheMonths !== 0) {
        date.setMonth(new Date().getMonth() + navigateThroughTheMonths);
    }

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let firstDayOfMonth = new Date(year, month, 1);
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let dateString = firstDayOfMonth.toLocaleDateString("en-us", {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    let dayOfWeekPosition = weekdays.indexOf(dateString.split(", ")[0]);
    let monthYearDisplay = document.querySelector(".month-year-display");

    monthYearDisplay.textContent = `${date.toLocaleDateString("en-us", { month: 'long' })} ${year}`;
    calendar.textContent = "";

    let allDaysInMonth = dayOfWeekPosition + daysInMonth;

    for (let i = 1; i <= allDaysInMonth; i++) {

        let dayNumber = i;
        let dayContainer = document.createElement("article");

        dayContainer.classList.add("calendar-day");

        let dayMonthYearAsString = `${month + 1}/${i - dayOfWeekPosition}/${year}`;


        let isDayNumberMoreThanDayOfWeekPosition = dayNumber > dayOfWeekPosition;

        if (isDayNumberMoreThanDayOfWeekPosition) {

            dayContainer.textContent = dayNumber - dayOfWeekPosition;
            let eventForDay = events.find(e => e.date === dayMonthYearAsString);
            let isCurrentDay = dayNumber - dayOfWeekPosition === day && navigateThroughTheMonths === 0;

            if (isCurrentDay) {
                dayContainer.classList.add("current-day");
            }

            if (eventForDay) {

                let eventContainer = document.createElement("section");
                eventContainer.classList.add("event");
                eventContainer.innerText = eventForDay.title;
                dayContainer.appendChild(eventContainer);
            }

            dayContainer.addEventListener("click", () => openModal(dayMonthYearAsString, addEventModal, deleteEventModal, backDropModal));
        } else {
            dayContainer.classList.add("empty-container");
        }

        calendar.appendChild(dayContainer);
    }
};

load();