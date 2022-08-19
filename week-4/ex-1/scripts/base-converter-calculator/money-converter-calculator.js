const moneyConvert = () => {

    let baseOperationsSection = document.querySelector("#base-operations");

    let reverseSection = document.querySelector(".reverse-classic-container");

    let baseOperationReset = document.querySelector("#operation--reset");
    let baseOperationBackUp = document.querySelector("#operation--backup");
    let baseOperationMinus = document.querySelector("#operation--minus");
    let baseOperationDivision = document.querySelector("#operation--division");
    let baseOperationPlus = document.querySelector("#operation--plus");
    let baseOperationMultiply = document.querySelector("#operation--multiplicaiton");


    if (isMoneyClicked === true) {

        baseOperationReset.parentElement.removeChild(baseOperationReset);
        baseOperationBackUp.parentElement.removeChild(baseOperationBackUp);
        baseOperationMinus.parentElement.removeChild(baseOperationMinus);
        baseOperationDivision.parentElement.removeChild(baseOperationDivision);
        baseOperationPlus.parentElement.removeChild(baseOperationPlus);
        baseOperationMultiply.parentElement.removeChild(baseOperationMultiply);
    }

    let usdCurrencyButtonElement = document.createElement("button");
    let eurCurrencyButtonElement = document.createElement("button");
    let chfCurrencyButtonElement = document.createElement("button");
    let jpyCurrencyButtonElement = document.createElement("button");

    let reverseButtonElement = document.createElement("button");

    usdCurrencyButtonElement.classList.add("operator");
    eurCurrencyButtonElement.classList.add("operator");
    chfCurrencyButtonElement.classList.add("operator");
    jpyCurrencyButtonElement.classList.add("operator");

    usdCurrencyButtonElement.id = "operator";
    eurCurrencyButtonElement.id = "operator";
    chfCurrencyButtonElement.id = "operator";
    jpyCurrencyButtonElement.id = "operator";

    reverseButtonElement.classList.add("action--converter-reverse-button");


    usdCurrencyButtonElement.textContent = "USD";
    eurCurrencyButtonElement.textContent = "EUR";
    chfCurrencyButtonElement.textContent = "CHF";
    jpyCurrencyButtonElement.textContent = "JPY";
    reverseButtonElement.textContent = "reverse";

    baseOperationsSection.appendChild(usdCurrencyButtonElement);
    baseOperationsSection.appendChild(eurCurrencyButtonElement);
    baseOperationsSection.appendChild(chfCurrencyButtonElement);
    baseOperationsSection.appendChild(jpyCurrencyButtonElement);
    reverseSection.appendChild(reverseButtonElement);

};