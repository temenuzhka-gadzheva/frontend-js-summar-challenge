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


    currencyChange();

    let classicButtonElement = document.querySelector(".action--converter-type-button");

    classicButtonElement.addEventListener("click", () => {
        /* if (isClassicClicked !== true) {*/
        console.log(isMoneyClicked);
        if (isMoneyClicked) {

            let baseOperationsSection = document.querySelector("#base-operations");

            usdCurrencyButtonElement.parentElement.removeChild(usdCurrencyButtonElement);
            eurCurrencyButtonElement.parentElement.removeChild(eurCurrencyButtonElement);
            chfCurrencyButtonElement.parentElement.removeChild(chfCurrencyButtonElement);
            jpyCurrencyButtonElement.parentElement.removeChild(jpyCurrencyButtonElement);
            reverseButtonElement.parentElement.removeChild(reverseButtonElement);

            let baseOperationReset = document.createElement("button");
            let baseOperationBackUp = document.createElement("button");
            let baseOperationMinus = document.createElement("button");
            let baseOperationDivision = document.createElement("button");
            let baseOperationPlus = document.createElement("button");
            let baseOperationMultiply = document.createElement("button");

            baseOperationReset.id = "operation--reset";
            baseOperationBackUp.id = "operation--backup";
            baseOperationMinus.id = "operation--minus";
            baseOperationDivision.id = "operation--division";
            baseOperationPlus.id = "operation--plus";
            baseOperationMultiply.id = "operation--multiplicaiton";

            baseOperationReset.textContent = "C";
            baseOperationBackUp.textContent = "<";
            baseOperationMinus.textContent = "-";
            baseOperationDivision.textContent = "/";
            baseOperationPlus.textContent = "+";
            baseOperationMultiply.textContent = "*";

            baseOperationReset.classList.add("operator");
            baseOperationBackUp.classList.add("operator");
            baseOperationMinus.classList.add("operator");
            baseOperationDivision.classList.add("operator");
            baseOperationPlus.classList.add("operator");
            baseOperationMultiply.classList.add("operator");


            baseOperationsSection.appendChild(baseOperationReset);
            baseOperationsSection.appendChild(baseOperationBackUp);
            baseOperationsSection.appendChild(baseOperationMinus);
            baseOperationsSection.appendChild(baseOperationDivision);
            baseOperationsSection.appendChild(baseOperationPlus);
            baseOperationsSection.appendChild(baseOperationMultiply);
            operatorButtons();

            baseConverterMoneyButtonElement.style.border = null;
            baseConverterMoneyButtonElement.style.backgroundColor = null;
            isMoneyClicked = false;
        }

        /*}*/
    });

    reverseButtonElement.addEventListener("click", () => {

        usdCurrencyButtonElement.parentElement.removeChild(usdCurrencyButtonElement);
        eurCurrencyButtonElement.parentElement.removeChild(eurCurrencyButtonElement);
        chfCurrencyButtonElement.parentElement.removeChild(chfCurrencyButtonElement);
        jpyCurrencyButtonElement.parentElement.removeChild(jpyCurrencyButtonElement);
        reverseButtonElement.parentElement.removeChild(reverseButtonElement);

        let baseOperationReset = document.createElement("button");
        let baseOperationBackUp = document.createElement("button");
        let baseOperationMinus = document.createElement("button");
        let baseOperationDivision = document.createElement("button");
        let baseOperationPlus = document.createElement("button");
        let baseOperationMultiply = document.createElement("button");


        baseOperationReset.id = "operation--reset";
        baseOperationBackUp.id = "operation--backup";
        baseOperationMinus.id = "operation--minus";
        baseOperationDivision.id = "operation--division";
        baseOperationPlus.id = "operation--plus";
        baseOperationMultiply.id = "operation--multiplicaiton";

        baseOperationReset.textContent = "C";
        baseOperationBackUp.textContent = "<";
        baseOperationMinus.textContent = "-";
        baseOperationDivision.textContent = "/";
        baseOperationPlus.textContent = "+";
        baseOperationMultiply.textContent = "*";

        baseOperationReset.classList.add("operator");
        baseOperationBackUp.classList.add("operator");
        baseOperationMinus.classList.add("operator");
        baseOperationDivision.classList.add("operator");
        baseOperationPlus.classList.add("operator");
        baseOperationMultiply.classList.add("operator");


        baseOperationsSection.appendChild(baseOperationReset);
        baseOperationsSection.appendChild(baseOperationBackUp);
        baseOperationsSection.appendChild(baseOperationMinus);
        baseOperationsSection.appendChild(baseOperationDivision);
        baseOperationsSection.appendChild(baseOperationPlus);
        baseOperationsSection.appendChild(baseOperationMultiply);
        operatorButtons();

        baseConverterMoneyButtonElement.style.border = null;
        baseConverterMoneyButtonElement.style.backgroundColor = null;

        isMoneyClicked = false;

        baseConverterTemperatureButtonElement.addEventListener("click", () => {
            if (isMoneyClicked !== true) {
                isTemperatureClicked = true;
                temperature();
                console.log("1");
            }
        });

    });
};