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


    if (isTemperatureClicked === true) {

        baseOperationReset.parentElement.removeChild(baseOperationReset);
        baseOperationBackUp.parentElement.removeChild(baseOperationBackUp);
        baseOperationMinus.parentElement.removeChild(baseOperationMinus);
        baseOperationDivision.parentElement.removeChild(baseOperationDivision);
        baseOperationPlus.parentElement.removeChild(baseOperationPlus);
        baseOperationMultiply.parentElement.removeChild(baseOperationMultiply);
        isTemperatureClicked = false;
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

    farenheitButtonElement.addEventListener("click", () => {
     
    });
    
    reverseButtonElement.addEventListener("click", () => {
        isReverseClicked = true;

    })

}