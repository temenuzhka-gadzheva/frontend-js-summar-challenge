let isHistoryTableShow = false;
let historyClickCounter = 0;

const history = (isOperationsContainerShow, isHistoryOperationButtonClicked) => {

    let historyExpressionsContainer = document.querySelector(".history-expressions-container");
    let historyTableElement = document.createElement("table");
    historyClickCounter = 0;
    historyTableElement.id = "history";

    if (isOperationsContainerShow) {

        let historyElement;

        if (isHistoryOperationButtonClicked === true) {
            historyElement = document.querySelector(".action--base-operations-button");
        } else {
            historyElement = document.querySelector(".action--converter-operations-button");
        }

        historyElement.addEventListener("click", () => {
            
            historyClickCounter++;
            console.log(historyClickCounter);

            if (historyClickCounter > 1) {

                historyTableElement.parentElement.removeChild(historyTableElement);
                historyClickCounter = 0;
                isHistoryTableShow = false;

            } else {

                historyArray.forEach(element => {

                    let historyTableRowElement = document.createElement("tr");
                    let historyTableDataElement = document.createElement("td");

                    historyTableDataElement.textContent = element;
                    historyTableRowElement.appendChild(historyTableDataElement);
                    historyTableElement.appendChild(historyTableRowElement);
                    historyExpressionsContainer.appendChild(historyTableElement);

                });
                historyClickCounter = 0;
                isHistoryTableShow = true;
            }

        })
    }
    return isHistoryTableShow;
};
