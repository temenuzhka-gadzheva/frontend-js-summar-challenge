const appendTemperatureButtons = (farenheitButtonElement, resetButtonElement, reverseButtonElement, classicButtonElement, baseConverterTemperatureButtonElement, baseConverterMoneyButtonElement, reverseClassicSection, baseOperationsSection) => {

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
};