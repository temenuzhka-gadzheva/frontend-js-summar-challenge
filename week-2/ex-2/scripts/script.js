const yearNow = 2022;

function getRandomNumber() {
    return Math.floor(Math.random() * 7) + 1;
}

var clientBirthYear = prompt("Моля въведете Вашата година на раждане !");
var clientBirthYearResult = parseInt(clientBirthYear);

console.log(clientBirthYearResult);

var isFirstNumberEven             =  clientBirthYearResult > 1965;
var isFirstNumberOdd              =  clientBirthYearResult < 1965;
var isClientBirthYearSpecialCase  =  clientBirthYearResult === 1965;
var firstNumber;

var clientYears = yearNow - clientBirthYearResult;

if(isClientBirthYearSpecialCase) {
    firstNumber = 0;
}
console.log(getRandomNumber());

var randomNumberResult = clientYears / getRandomNumber();

if(isFirstNumberEven) { 

   var isRandomNumberEven = randomNumberResult % 2 === 0;

   if(isRandomNumberEven) {
     firstNumber = randomNumberResult;
   }else {

    var oddRandomNumberResult        = randomNumberResult + 1;
    var oddRandomNumberToString      = oddRandomNumberResult.toString();
    var isNumberHaveMoreThanTwoDigits = oddRandomNumberResult >= 10;

    if(isNumberHaveMoreThanTwoDigits) {

        for (let i = 0; i < oddRandomNumberToString.length; i++) {
            firstNumber = oddRandomNumberToString.charAt(0);
            break;
        }

      }else {
        firstNumber = randomNumberResult + 1;
      }
   }
} else {
    var isRandomNumberOdd = randomNumberResult % 2 !== 0;

    if(isRandomNumberOdd) {
        firstNumber = randomNumberResult;
      }else {
   
       var oddRandomNumberResult         = randomNumberResult + 1;
       var oddRandomNumberToString       = oddRandomNumberResult.toString();
       var isNumberHaveMoreThanTwoDigits = oddRandomNumberResult >= 10;
   
       if(isNumberHaveMoreThanTwoDigits) {
   
           for (let i = 0; i < oddRandomNumberToString.length; i++) {
               firstNumber = oddRandomNumberToString.charAt(0);
               break;
           }
   
         }else {
           firstNumber = randomNumberResult + 1;
         }
    }
}

console.log(firstNumber);