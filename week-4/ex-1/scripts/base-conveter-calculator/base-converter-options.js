let historyContainer = document.querySelector(".additional-operations-container");

const converterOptions = (baseConverterOperationsButtonElement,baseConverterClassicButtonElement,baseConverterTemperatureButtonElement, baseConverterMoneyButtonElement) => {
                
    historyContainer = document.querySelector(".additional-operations-container");
    historyContainer.appendChild(baseConverterOperationsButtonElement);
    historyContainer.appendChild(baseConverterClassicButtonElement);
    historyContainer.appendChild(baseConverterTemperatureButtonElement);
    historyContainer.appendChild(baseConverterMoneyButtonElement);
   
    isBaseConverterOperationsShow = true;
    isOperationsContainerShow = false;
    isClassicClicked = false;
    isTemperatureClicked = false;
    isMoneyClicked = false;
};