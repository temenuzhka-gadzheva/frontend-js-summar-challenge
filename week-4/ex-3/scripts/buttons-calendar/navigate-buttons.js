const navigateButtons = () => {
    let backButton = document.querySelector(".back-button");
    let nextButton = document.querySelector(".next-button");

    nextButton.addEventListener("click", () => {
        navigateThroughTheMonths++;
        load();
    });

    backButton.addEventListener("click", () => {
        navigateThroughTheMonths--;
        load();
    });
};

navigateButtons();