let calculatorElement = document.querySelector(".calculator");

console.log(calculatorElement);
let historyTableElement = document.querySelector(".history-table");
let historyInformation = document.createElement('table');

const history = (isOperationsShow) => {
    if (isOperationsShow) {
        let historyElement = document.querySelector(".history");

        historyElement.addEventListener("click", () => {
            calculatorElement.style.display = "none";
            historyTableElement.style.display = "block";

            historyTableElement.appendChild(historyInformation);
            historyArray.forEach(element => {
                let historyRowInformation = document.createElement('tr');
                let historyRowDataInformation = document.createElement('td');

                historyRowDataInformation.textContent = element;
                historyRowInformation.append;
                historyTableElement.appendChild(historyRowInformation);
                historyTableElement.appendChild(historyRowDataInformation);
            });
        });
    }
}

