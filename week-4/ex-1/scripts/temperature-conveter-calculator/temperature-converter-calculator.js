
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

    equalNewStyle(equalButtonElement);

    removeBaseOperators(baseOperationReset, baseOperationBackUp, baseOperationMinus,
        baseOperationDivision, baseOperationPlus, baseOperationMultiply);

    let farenheitButtonElement = document.createElement("button");
    let resetButtonElement = document.createElement("button");

    let reverseButtonElement = document.createElement("button");
    let classicButtonElement = document.createElement("button");

    let baseConverterTemperatureButtonElement = document.createElement("button");
    let baseConverterMoneyButtonElement = document.createElement("button");

    appendTemperatureButtons(farenheitButtonElement, resetButtonElement, reverseButtonElement,
        classicButtonElement, baseConverterTemperatureButtonElement,
        baseConverterMoneyButtonElement, reverseClassicSection,
        baseOperationsSection);

    temperatureChange(isTemperatureClicked);

    farenheitButtonElement.addEventListener("click", () => {

        isTemperatureClicked = true;
        reset();
        console.log(historyArray);

    });

    classicButtonElement.addEventListener("click", () => {

        if (isTemperatureClicked === true) {

            isBaseConverterOperationsShow = false;
            isTemperatureClicked = false;
            isMoneyClicked = false;
            isClassicClicked = false;
            isReload = true;

            location.reload();
        }

        reset();
    });

    reverseButtonElement.addEventListener("click", () => {

        if (isTemperatureClicked === true) {

            isReload = true;
            location.reload();
            baseConverter(isReload);
        } 
    });
    
    reset();
    baseConverterMoneyButtonElement.disabled = true;
    isTemperatureClicked = true;
    isReload = false;
}

