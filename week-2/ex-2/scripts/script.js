
const yearNow = 2022;
const boundaryYear = 1965;
const digitsCollection = [];

function getFirstRandomNumber() {
    return Math.floor(Math.random() * 7) + 1;
}

function getSecondRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

var clientBirthYear = prompt("Моля въведете Вашата година на раждане !");
var clientBirthYearResult = parseInt(clientBirthYear);
var clientYears = yearNow - clientBirthYearResult;

var isFirstNumberEven             =  clientBirthYearResult > boundaryYear;
var isFirstNumberOdd              =  clientBirthYearResult < boundaryYear;
var isClientBirthYearSpecialCase  =  clientBirthYearResult === boundaryYear;
var firstNumber;

if(isClientBirthYearSpecialCase) {
    firstNumber = 0;
}else{

  var randomNumberResult = Math.round(clientYears / getFirstRandomNumber());

  if(isFirstNumberEven) { 
  
     var isRandomNumberEven = randomNumberResult % 2 === 0;

     if(isRandomNumberEven) {

       var isEvenNumberMoreThanTwoDigits = randomNumberResult >= 10;
          if(isEvenNumberMoreThanTwoDigits) {

            var evenNumberToString = randomNumberResult.toString();
            firstNumber = evenNumberToString[0];

          } else {
            firstNumber = randomNumberResult;
          }
     }else {
  
      var oddRandomNumberResult          = randomNumberResult + 1;
      var evenRandomNumberToString       = oddRandomNumberResult.toString();
      var isNumberHaveMoreThanTwoDigits  = oddRandomNumberResult >= 10;

      if(isNumberHaveMoreThanTwoDigits) {
        firstNumber = evenRandomNumberToString[0];
        }else {
          firstNumber = randomNumberResult + 1;
        }
     }
  } else {

      var isRandomNumberOdd = randomNumberResult % 2 !== 0;

      if(isRandomNumberOdd) {

          var isOddNumberMoreThanTwoDigits = randomNumberResult >= 10;
          if(isOddNumberMoreThanTwoDigits) {

            var oddNumberToString = randomNumberResult.toString();
            firstNumber = oddNumberToString[0];
          
          } else {
            firstNumber = randomNumberResult;
          }
        }else {
     
         var oddRandomNumberResult          = randomNumberResult + 1;
         var oddRandomNumberToString        = oddRandomNumberResult.toString();
         var isNumberHaveMoreThanTwoDigits  = oddRandomNumberResult >= 10;

         if(isNumberHaveMoreThanTwoDigits) {
             firstNumber = oddRandomNumberToString[0];

           }else {
             firstNumber = randomNumberResult + 1;
           }
      }
  }
}

var isFirstNumberEqualNine = firstNumber === 9;

if(isFirstNumberEqualNine) {
   secondNumber = 0;
}else {
  var clientGender = prompt("Моля въведете Вашия пол !");
  var isGenderMan   = clientGender.toLowerCase() === "мъжки";
  var isGenderWoman = clientGender.toLowerCase() === "женски";
  var isUserSkipThisQuestion = clientGender !== isGenderMan && clientGender !== isGenderWoman;
  var secondNumber;

  if(isUserSkipThisQuestion) {
   
    var isRandomNumberEqualToGenderMan   = getSecondRandomNumber() === 1;
    var isRandomNumberEqualToGenderWoman = getSecondRandomNumber() === 3;
  
    while(isRandomNumberEqualToGenderMan   === false || 
          isRandomNumberEqualToGenderWoman === false) {
      var generateNewRandomNumber = getSecondRandomNumber();
      var isNewRandomNumberDifferent = generateNewRandomNumber !== 1 && 
                                       generateNewRandomNumber !== 3;

      if(isNewRandomNumberDifferent) {
         secondNumber = generateNewRandomNumber;
         break;
      }
        continue;
    }
  }else {

    if(isGenderMan) {
       secondNumber = 1;
    } 
    if(isGenderWoman) {
      secondNumber = 3;
    }
  }
}
