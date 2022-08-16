let rootContainerElement = document.querySelector(".root");
let operationsElement = document.createElement('button');
let isOperationsShow = false;
console.log(rootContainerElement);

const optionalOperations = () => {

    operationsElement.classList.add("history");
    operationsElement.textContent = "operations";
    operationsElement.style.float = "right";


    let operationalCalculatorButton = document.querySelector("#operational-calculator");

    operationalCalculatorButton.addEventListener('click', () => {
        rootContainerElement.appendChild(operationsElement);
        isOperationsShow = true;
    });

    return isOperationsShow;
}
