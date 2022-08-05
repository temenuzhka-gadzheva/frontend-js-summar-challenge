let randomNumberForCut;
let isCuttingActive = false;
let userAssumptionForCutOperation;
let isOxygenSufficient = true;

const cutOzoneHole = () => {

   randomNumberForCut = randomNumberFromCutAndFillOperations();
   isCuttingActive = true;
   userAssumptionForCutOperation = prompt("Генерирах число от 1 до 20 познай го - за да отрежа дупката !");

   while(randomNumberForCut != userAssumptionForCutOperation) {

    if(hoursOfOxygen == 0) {
      isOxygenSufficient = false;
      break;
    }
     alert(`Не успешен опит пробвай пак ${userAssumptionForCutOperation}`);
     hoursOfOxygen--;
     userAssumptionForCutOperation = prompt("Генерирах число от 1 до 20 познай го - за да отрежа дупката !");
   }

   if(isOxygenSufficient === false) {
    return alert("Кислородът Ви свърши !");
   }

   return alert("Операцията cut е изпълнена успешно !");
};