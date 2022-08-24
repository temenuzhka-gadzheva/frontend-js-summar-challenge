const moneyConvert = () => {

    let baseOperationsSection = document.querySelector("#base-operations");

    let reverseSection = document.querySelector(".reverse-classic-container");

    let baseOperationReset = document.querySelector("#operation--reset");
    let baseOperationBackUp = document.querySelector("#operation--backup");
    let baseOperationMinus = document.querySelector("#operation--minus");
    let baseOperationDivision = document.querySelector("#operation--division");
    let baseOperationPlus = document.querySelector("#operation--plus");
    let baseOperationMultiply = document.querySelector("#operation--multiplicaiton");

    if (isMoneyClicked) {

        removeBaseOperators(baseOperationReset,baseOperationBackUp,baseOperationMinus,
                            baseOperationDivision,baseOperationPlus,baseOperationMultiply)
    }

    let usdCurrencyButtonElement = document.createElement("button");
    let eurCurrencyButtonElement = document.createElement("button");
    let chfCurrencyButtonElement = document.createElement("button");
    let jpyCurrencyButtonElement = document.createElement("button");
    let reverseButtonElement = document.createElement("button");

    moneyButtons(usdCurrencyButtonElement, eurCurrencyButtonElement,
        chfCurrencyButtonElement,jpyCurrencyButtonElement ,reverseButtonElement, baseOperationsSection,
        reverseSection, isMoneyClicked);

    let classicButtonElement = document.querySelector(".action--converter-type-button");

    classicButtonElement.addEventListener("click", () => {
        location.reload();
    });

    let baseConverterTemperature = document.querySelector(".action--data-converter-temperature");

    baseConverterTemperature.disabled = true;
    isMoneyClicked = true;
    isReload = false;
}
