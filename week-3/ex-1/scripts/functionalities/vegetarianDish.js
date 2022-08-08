const vegetarianDish = (data) => {

    let vegertarianChoice                           =  prompt("Какво ястие от секция вегетарианско предпочитате?"  +
                                                              "\n ВЕГЕТАРИАНСКО"                                   +
                                                              "\n ВЕГАНСКО"                                        +
                                                              "\n ПЕСКАТЕРИАНСКО");

    let vegetarian                                  = vegertarianChoice.toUpperCase()                      === "ВЕГЕТАРИАНСКО";
    let vegan                                       = vegertarianChoice.toUpperCase()                      === "ВЕГАНСКО";
    let peskaterian                                 = vegertarianChoice.toUpperCase()                      === "ПЕСКАТЕРИАНСКО";

    let isHaveNotConvectionOvenInTheKitchen         =  data.haveConvectionOvenInTheKitchen.toUpperCase()   === "N";
    let isHaveNotElectricGrillInTheKitchen          =  data.haveElectricGrillInTheKitchen.toUpperCase()    === "N";
    let isHaveNotHoodInTheKitchen                   =  data.haveHoodInTheKitchen.toUpperCase()             === "N";

    let isOneOfVegetarianConditionsCorrect          =  isHaveNotConvectionOvenInTheKitchen     ||
                                                       isHaveNotElectricGrillInTheKitchen      || 
                                                       isHaveNotHoodInTheKitchen;

    let isHaveFridgeInTheKitchen                    =  data.haveFridgeInTheKitchen.toUpperCase()           === "Y";
    let isChefNameCorrect                           =  data.chefName.toUpperCase()                         === "МАНОЛ";
    let isCountOfCooks                              =  Number(data.countOfCooks)           >= 3 && 
                                                       Number(data.countOfCooks)           < 11;
                                                       
    let waitersCountCorrect                         =  Number(data.countOfWaiters)         !== 7; 
    
    let isAllOfVeganConditionsCorrect               =  isHaveFridgeInTheKitchen              && 
                                                       isChefNameCorrect                     && 
                                                       isCountOfCooks                        && 
                                                       waitersCountCorrect;
    
    let isHaveElectricGrillInTheKitchen             =  data.haveElectricGrillInTheKitchen.toUpperCase()   === "Y";
    let isAnswerOfOptionQuestion                    =  data.isAnswerOfOptionQuestion      === true;

    let peskaterianFirstPartConditions              =  isHaveElectricGrillInTheKitchen       || 
                                                       isAnswerOfOptionQuestion;

    let isCubicCapacityCorrect                      =  (Number(data.kitchenWidthInCentimeters)  *
                                                        Number(data.kitchenLenghtInCentimeters)  *
                                                        Number(data.kitchenHeightInCentimeters)) / 1000 < 13;

    let isMoneyCorrect                              =   Number(data.moneyInBankAccount)          +
                                                        Number(data.dailyTurnover     )          < 158000;

    let peskaterianSecondPartConditions             =  isCubicCapacityCorrect                || 
                                                       isMoneyCorrect; 

    let isAllOfPeskaterianConditionsCorrect         =  peskaterianFirstPartConditions          && 
                                                       peskaterianSecondPartConditions;

    let isOrderCorrect                              =  (isOneOfVegetarianConditionsCorrect  && vegetarian  )    || 
                                                       (isAllOfVeganConditionsCorrect       && vegan       )    || 
                                                       (isAllOfPeskaterianConditionsCorrect && peskaterian );

    if(isOrderCorrect) {
        acceptedOrderMessage();
    }

}