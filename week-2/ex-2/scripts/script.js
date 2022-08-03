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

var isUserMinor = clientYears < 18;
var isUserAdult = clientYears >= 18;
var thirdNumber;

if(isUserAdult) {
  thirdNumber = 0;
}

if(isUserMinor){

var motherBirthYear = 
    prompt("Моля въведете годината на раждане на майка си !");
var fatherBirthYear =
    prompt("Моля въведете годината на раждане на баща си !");

var motherBirthYearToString = motherBirthYear.toString();
var fatherBirthYearToString = fatherBirthYear.toString();

var isLastDigitsFromMotherAndFatherBirthYearEqual =
                                              motherBirthYearToString[3] === 
                                              fatherBirthYearToString[3]; 

 if(isLastDigitsFromMotherAndFatherBirthYearEqual) {
    thirdNumber = motherBirthYearToString[2];
 } else {
   thirdNumber = fatherBirthYearToString[3];
 }
}


var clientHeightInCentimeters = 
    prompt("Моля въведете височината си в сантиметри !");
var clientWeightInKilograms =
    prompt("Моля въведете теглото си в килограми !");

var heightInMeters        = clientHeightInCentimeters / 100;
var heightSquareInMeter  = heightInMeters * heightInMeters;
var fourtNumber;
var bodyMassIndex = (clientWeightInKilograms /
                     heightSquareInMeter)
                    .toFixed(2);


var isBodyMassIndexUnderNorm   =  bodyMassIndex <  16;

var isBodyMassIndexNormal      =  bodyMassIndex >= 16   && 
                                  bodyMassIndex <= 16.99;

var isBodyMassIndexAtletic     =  bodyMassIndex >= 17   && 
                                  bodyMassIndex <= 18.49;

var isBodyMassIndexOverAtletic =  bodyMassIndex >= 18.5 && 
                                  bodyMassIndex <= 24.99;

var isBodyMassIndexOverWeight  =  bodyMassIndex >= 25   && 
                                  bodyMassIndex <= 29.99;

var isBodyMassIndexFat         =  bodyMassIndex >= 30   && 
                                  bodyMassIndex <= 34.99;

var isBodyMassIndexObese       =  bodyMassIndex >= 35   && 
                                  bodyMassIndex <= 39.99;

var isBodyMassIndexVeryObese   =  bodyMassIndex >= 40;

if(isBodyMassIndexUnderNorm) {
  fourtNumber = 1;
}

if(isBodyMassIndexNormal) {
  fourtNumber = 2;
}

if(isBodyMassIndexAtletic) {
  fourtNumber = 3;
}

if(isBodyMassIndexOverAtletic) {
  fourtNumber = 4;
}

if(isBodyMassIndexOverWeight) {
  fourtNumber = 5;
}

if(isBodyMassIndexFat) {
  fourtNumber = 6;
}

if(isBodyMassIndexObese) {
  fourtNumber = 7;
}

if(isBodyMassIndexVeryObese) {
  fourtNumber = 8;
}

var fiveNumber;

var shoppingItem = prompt( "Моля изберете стока, която искате да закупите от списъка по-долу: " +
                          "\n i.    плодове и зеленчуци" +
                          "\n ii.   месо и месни продукти" + 
                          "\n iii.  цигари и алкохол" +
                          "\n iv.   млечни продукти" +
                          "\n v.    захарни изделия." + 
                          "\n Моля посочете само символа пред артикула" + 
                          "\n Например i");

var isItemFirst  = shoppingItem === "i";
var isItemSecond = shoppingItem === "ii";
var isItemThird  = shoppingItem === "iii";
var isItemFourth = shoppingItem === "iv";
var isItemFifth  = shoppingItem === "v";

if(isItemFirst){
  fiveNumber = 1;
}
if(isItemSecond){
  fiveNumber = 2;
}
if(isItemThird){
  fiveNumber = 3;
}
if(isItemFourth){
  fiveNumber = 4;
}
if(isItemFifth){
  fiveNumber = 5;
}

var howOfenBuy =  prompt( "Моля изберете колко често купувате продукта от предишното меню: " +
                          "\n 1. рядко" +
                          "\n 2. понякога" + 
                          "\n 3. често" +
                          "\n Моля посочете само числото" + 
                          "\n Например 1");

var isRarely      = howOfenBuy === "1";
var isSomethimes  = howOfenBuy === "2";
var isOfen        = howOfenBuy === "3";

if(isRarely){
  fiveNumber += 1;
}
if(isSomethimes){
  fiveNumber += 2;
}
if(isOfen){
  fiveNumber += 3;
}

var sixthNumber;
var numbersSumFromOneToFive;
var sixNumberToString;

numbersSumFromOneToFive = firstNumber + secondNumber + 
              thirdNumber + fourtNumber + fiveNumber;


sixNumberToString = numbersSumFromOneToFive.
                                  toString();


var isSixNumberHaveMoreTwoDigits = numbersSumFromOneToFive >= 10;


if(isSixNumberHaveMoreTwoDigits) {
  sixthNumber = Number(sixNumberToString[0]) + 
                Number(sixNumberToString[1]);
}else {
  sixthNumber = numbersSumFromOneToFive;
}

var seventhNumber;

var isFirstThirdAndFifithNumbersEven = firstNumber % 2 === 0 &&
                                       thirdNumber % 2 === 0 &&
                                       fifthNumber % 2 === 0 ;
                        
if(isFirstThirdAndFifithNumbersEven) {
 seventhNumber = 0; 
}

var isFirstThirdAndFifithNumbersOdd  = firstNumber % 2 !== 0 &&
                                       thirdNumber % 2 !== 0 &&
                                       fifthNumber % 2 !== 0 ;

if(isFirstThirdAndFifithNumbersOdd) {
  seventhNumber = 1;
} 

var isFirstThirdOrFifithNumbersEven  = firstNumber % 2 === 0 ||
                                       thirdNumber % 2 === 0 ||
                                       fifthNumber % 2 === 0 ;

if(isFirstThirdOrFifithNumbersEven) {
  seventhNumber = 2;
} 

var isFristAndSecondDigitEven        = firstNumber  % 2 === 0 &&
                                       secondNumber % 2 === 0 ;

var isThirdAndFourthAndFifthDigitOdd =  thirdNumber % 2 !== 0 &&
                                        fourtNumber % 2 !== 0 &&
                                        fifthNumber % 2 !== 0 ;

if(isFristAndSecondDigitEven || isThirdAndFourthAndFifthDigitOdd){
  seventhNumber = 3;
}

var isAllDigitsEqual                 =  firstNumber  === secondNumber &&
                                        secondNumber === thirdNumber  &&
                                        thirdNumber  === fourtNumber  &&
                                        fourtNumber  === fifthNumber  &&
                                        fifthNumber  === sixthNumber;

if(isAllDigitsEqual) {
  seventhNumber = 4;
}

var isAllDigitsMoreThanPrevious      =  firstNumber  < secondNumber &&
                                        secondNumber < thirdNumber  &&
                                        thirdNumber  < fourtNumber  &&
                                        fourtNumber  < fifthNumber  &&
                                        fifthNumber  < sixthNumber;

if(isAllDigitsMoreThanPrevious) {
  seventhNumber = 5;
}

var generatedDigitsSum = numbersSumFromOneToFive + sixthNumber;
var isSumFromGeneratedDigitsLessThanTen = numbersSumFromOneToFive < 10;

if(isSumFromGeneratedDigitsLessThanTen) {
  seventhNumber = 6;
}

var isSumFromGeneratedDigitsMoreThanTen = numbersSumFromOneToFive > 10;

if(isSumFromGeneratedDigitsMoreThanTen) {
  seventhNumber = 7;
}

var isSeventNumberUndefined = seventhNumber === undefined;

if(isSeventNumberUndefined) {
  seventhNumber = 9;
}