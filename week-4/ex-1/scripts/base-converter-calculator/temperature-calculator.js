const temperature = () => {

    let baseOperationsSection = document.querySelector("#base-operations");
    let equalButtonElement = document.querySelector(".operation--equal");

    let baseOperationReset = document.querySelector("#operation--reset");
    let baseOperationBackUp = document.querySelector("#operation--backup");
    let baseOperationMinus = document.querySelector("#operation--minus");
    let baseOperationDivision = document.querySelector("#operation--division");
    let baseOperationPlus = document.querySelector("#operation--plus");
    let baseOperationMultiply = document.querySelector("#operation--multiplicaiton");

    let reverseClassicSection = document.querySelector(".reverse-classic-container");

    historyContainer.style.display = "none";

    equalButtonElement.style.float = "left";
    equalButtonElement.style.width = "210px";
    equalButtonElement.style.fontSize = "25px";
    equalButtonElement.style.textAlign = "center";


    if (isTemperatureClicked) {

        baseOperationReset.parentElement.removeChild(baseOperationReset);
        baseOperationBackUp.parentElement.removeChild(baseOperationBackUp);
        baseOperationMinus.parentElement.removeChild(baseOperationMinus);
        baseOperationDivision.parentElement.removeChild(baseOperationDivision);
        baseOperationPlus.parentElement.removeChild(baseOperationPlus);
        baseOperationMultiply.parentElement.removeChild(baseOperationMultiply);
    }
    let farenheitButtonElement = document.createElement("button");
    let resetButtonElement = document.createElement("button");

    let reverseButtonElement = document.createElement("button");
    let classicButtonElement = document.createElement("button");

    let baseConverterTemperatureButtonElement = document.createElement("button");
    let baseConverterMoneyButtonElement = document.createElement("button");


    farenheitButtonElement.classList.add("operator");
    resetButtonElement.classList.add("operator");

    reverseButtonElement.classList.add("action--converter-reverse-button");
    classicButtonElement.classList.add("action--converter-type-button");

    baseConverterMoneyButtonElement.classList.add("action--data-converter-money");
    baseConverterTemperatureButtonElement.classList.add("action--data-converter-temperature");

    farenheitButtonElement.textContent = "F";
    resetButtonElement.textContent = "C";
    resetButtonElement.id = "operation--reset";

    reverseButtonElement.textContent = "reverse";
    classicButtonElement.textContent = "classic";

    baseConverterMoneyButtonElement.textContent = "$";
    baseConverterTemperatureButtonElement.textContent = "T";
    baseConverterTemperatureButtonElement.id = "temperature-container";

    baseOperationsSection.appendChild(farenheitButtonElement);
    baseOperationsSection.appendChild(resetButtonElement);

    reverseClassicSection.appendChild(reverseButtonElement);
    reverseClassicSection.appendChild(classicButtonElement);

    reverseClassicSection.appendChild(baseConverterTemperatureButtonElement);
    reverseClassicSection.appendChild(baseConverterMoneyButtonElement);

    temperatureChange(isTemperatureClicked);

    farenheitButtonElement.addEventListener("click", () => {

        equalButton();
        // resetValueOfCalculator();
    });

    classicButtonElement.addEventListener("click", () => {
        /* if (isClassicClicked !== true) {*/
        console.log(isTemperatureClicked);

        if (isTemperatureClicked) {

            let baseOperationsSection = document.querySelector("#base-operations");

            farenheitButtonElement.parentElement.removeChild(farenheitButtonElement);
            resetButtonElement.parentElement.removeChild(resetButtonElement);
            reverseButtonElement.parentElement.removeChild(reverseButtonElement);
            baseConverterTemperatureButtonElement.parentElement.removeChild(baseConverterTemperatureButtonElement);
            baseConverterMoneyButtonElement.parentElement.removeChild(baseConverterMoneyButtonElement);
            classicButtonElement.parentElement.removeChild(classicButtonElement);

            equalButtonElement.style.float = null;
            equalButtonElement.style.width = null;
            equalButtonElement.style.fontSize = null;
            equalButtonElement.style.textAlign = null;

            /*float: left; width: 210px; font-size: 25px; text-align: center; */
            baseOperationReset = document.createElement("button");
            baseOperationBackUp = document.createElement("button");
            baseOperationMinus = document.createElement("button");
            baseOperationDivision = document.createElement("button");
            baseOperationPlus = document.createElement("button");
            baseOperationMultiply = document.createElement("button");

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
            isTemperatureClicked = false;

            resetValueOfCalculator();
            isBaseConverterOperationsShow = false;
            isBaseConverterOperationsShow = false;
            isTemperatureClicked = false;
            isMoneyClicked = false;
            isClassicClicked = false;
            isOperationsShow = false;
            baseConverterCalculator.disabled = false;
            operationalCalculatorButton.disabled = false;
            baseConverter();

        }
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
        isBaseConverterOperationsShow = false;

        baseConverterTemperatureButtonElement.addEventListener("click", () => {
            if (isMoneyClicked !== true) {
                isTemperatureClicked = true;
                temperature();
                console.log("1");
            }
        });

    });

    resetValueOfCalculator();
}
