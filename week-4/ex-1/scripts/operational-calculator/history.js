
console.log(isOperationsShow);
const history = () => {
    if (isOperationsShow === true) {
        let historyElement = document.querySelector(".history");
    
        console.log(historyElement);
        if (historyElement !== null) {
            historyElement.addEventListener("click", () => {
                console.log("1");
            });
        }
    }
}

