const moneyButtons = (usdCurrencyButtonElement,eurCurrencyButtonElement,chfCurrencyButtonElement,jpyCurrencyButtonElement,reverseButtonElement,baseOperationsSection,reverseSection,isMoneyClicked) => {

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


    currencyChange(isMoneyClicked);
}