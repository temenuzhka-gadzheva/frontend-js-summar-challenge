let randomNumberForCut;
let isCuttingActive = false;
let userNumber;
let isOxygenSufficient = true;

const cutOzoneHole = () => {

  if(isIdentifyHole === false) return alert("Все още няма идентифицирана озонова дупка. Моля, индетифицирайте !");

   randomNumberForCut = randomNumberFromCutOperation();
   isCuttingActive = true;
   userNumber = prompt("Генерирах число от 1 до 20 познай го - за да отрежа дупката !");

   while(randomNumberForCut != userNumber) {

    if(hoursOfOxygen == 0) {
      isOxygenSufficient = false;
      break;
    }
     alert(`Не успешен опит пробвай пак ${userNumber}`);
     hoursOfOxygen--;
     userNumber = prompt("Генерирах число от 1 до 20 познай го - за да отрежа дупката !");
   }

   if(isOxygenSufficient === false) {
    return alert("Кислородът Ви свърши !");
   }

   return alert("Операцията cut е изпълнена успешно !");
};