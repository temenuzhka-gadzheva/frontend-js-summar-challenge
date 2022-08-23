let historyExpressionsContainer = document.querySelector(".history-expressions-container");
let historyTableElement = document.createElement("table");
let isHistoryTableShow = false;

const history = (isOperationsShow, isBaseConverterOperationsShow) => {

    if (isOperationsShow) {
        let historyElement;

        if (isBaseConverterOperationsShow === true) {
            historyElement = document.querySelector(".action--converter-operations-button");
        } else {
            historyElement = document.querySelector(".action--base-operations-button");
        }

        historyElement.addEventListener("click", () => {

            historyArray.forEach(element => {

                let historyTableRowElement = document.createElement("tr");
                let historyTableDataElement = document.createElement("td");

                historyTableDataElement.textContent = element;
                historyTableRowElement.appendChild(historyTableDataElement);
                historyTableElement.appendChild(historyTableRowElement);
                historyExpressionsContainer.appendChild(historyTableElement);

            });
            isHistoryTableShow = true;
        })
    }
}
