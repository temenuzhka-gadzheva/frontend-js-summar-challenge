var randomNumberForCut;
var isCuttingActive = false;
var userNumber;

const cutOzoneHole = () => {
   randomNumberForCut = randomNumberFromCutOperation();
   isCuttingActive = true;
   userNumber = prompt("Генерирах число от 1 до 20 познай го - за да отрежа дупката !");

   while(randomNumberForCut != userNumber) {
     alert(`Не успешен опит пробвай пак ${userNumber}`);
     userNumber = prompt("Генерирах число от 1 до 20 познай го - за да отрежа дупката !");
   }

   return alert("Операцията cut е изпълнена успешно !");

};