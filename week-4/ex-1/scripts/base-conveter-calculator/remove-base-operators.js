const removeBaseOperators = (baseOperationReset,baseOperationBackUp,baseOperationMinus,baseOperationDivision,baseOperationPlus,baseOperationMultiply) => {
    baseOperationReset.parentElement.removeChild(baseOperationReset);
    baseOperationBackUp.parentElement.removeChild(baseOperationBackUp);
    baseOperationMinus.parentElement.removeChild(baseOperationMinus);
    baseOperationDivision.parentElement.removeChild(baseOperationDivision);
    baseOperationPlus.parentElement.removeChild(baseOperationPlus);
    baseOperationMultiply.parentElement.removeChild(baseOperationMultiply);
}