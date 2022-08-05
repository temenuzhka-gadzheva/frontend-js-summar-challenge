let randomNumberForFill; 
let isActivateFill = false;
let userAssumptionForFillOperation;
let isFuelSufficient = true;
 
 const fillOzoneHole = () => {
    randomNumberForFill = randomNumberFromCutAndFillOperations() + randomNumberForCut;
    isActivateFill = true;
    userAssumptionForFillOperation = prompt(`Генерирах число от 1 до 20 и го събрах с ${userAssumptionForCutOperation}, числото от cut операцията,познай го - за да запълня дупката !`);

    while(randomNumberForFill != userAssumptionForFillOperation) {

        if(litersOfFuel == 0) {
          isFuelSufficient = false;
          break;
        }
         alert(`Не успешен опит пробвай пак ${userAssumptionForFillOperation}`);
         litersOfFuel--;
         userAssumptionForFillOperation = prompt(`Генерирах число от 1 до 20 и го събрах с ${userAssumptionForCutOperation}, числото от cut операцията,познай го - за да запълня дупката !`);
       }
    
       if(isFuelSufficient === false) {
        return alert("Горивото Ви свърши !");
       }
    
       return alert("Операцията fill е изпълнена успешно !");
}