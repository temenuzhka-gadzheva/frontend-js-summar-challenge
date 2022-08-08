const meatDish = (data) => {

    let servingSize                                 = prompt("Колко голяма порция предпочитате?"  +
                                                             "\n (1) малка  - 450 грама"          +
                                                             "\n (2) средна - 750 грама"          +
                                                             "\n (3) голяма - 950 грама");
                        
    let roastingMeatChoice                          = prompt(" Каква разновидност на изпичане желаете?" +
                                                             "\n (1) RARE"                              +
                                                             "\n (2) MEDIUM"                            +
                                                             "\n (3) WELL DONE");
    
    let isHaveNotGasStoveInTheKitchen               = data.haveGasStoveInTheKitchen                       === "N";
    let isHaveElectricGrillInTheKitchen             = data.haveElectricGrillInTheKitchen                  === "Y";
    let allowableTemperatureInterval                = Number(data.minThemperatureInTheKitchen)            >= 36         && 
                                                      Number(data.maxTemperatureInTheKitchen )            <= 48  ;
    let isHaveHoodInTheKitchen                      = data.haveHoodInTheKitchen                           === "Y";
    let isServingSizeSmall                          = servingSize                                         === "1";
                        
    let isHaveConvectionOvenInTheKitchen            = data.haveConvectionOvenInTheKitchen                 === "Y";
    
    let isCountOfStaff                              = Number(data.countOfCooks)                           === 5;

    let isServingSizeMedium                         = servingSize                                         === "2";
    let isChefName                                  = data.nameOfTheResponsibleForTheSauces               === "Иван";

    let isKitchenWorkTo22                           =  data.closeRestaurant === "22";
    let isNameOfTheResponsibleForTheSaucesAllowable =  data.nameOfTheResponsibleForTheSauces              === "Петър"   || 
                                                       data.nameOfTheResponsibleForTheSauces              === "Радо";
    
    let isKitchenQuadratureCorrect                  = (Number(data.kitchenWidthInCentimeters)   * 
                                                       Number(data.kitchenLenghtInCentimeters)) / 1000    === 45;

    let isKitchenUtensilsCorrect                    = Number(data.countOfPans)                            === 3         && 
                                                      Number(data.countOfPots)                            === 2;

    let isAllConditionsForRareCorrect               =  isHaveNotGasStoveInTheKitchen                                    && 
                                                       isHaveElectricGrillInTheKitchen                                  &&
                                                       allowableTemperatureInterval                                     &&
                                                       isHaveHoodInTheKitchen                                           && 
                                                       isServingSizeSmall;       
       
    let isOneConditionForMediumCorrect              =  isHaveConvectionOvenInTheKitchen                                 ||
                                                       isCountOfStaff                                                   ||
                                                       isServingSizeMedium                                              ||
                                                       isChefName;
                            
    let isOneConditionFirstPartForWellDoneCorrect   = isKitchenWorkTo22                                                 ||
                                                      isNameOfTheResponsibleForTheSaucesAllowable; 

    let isOneConditionSecondPartForWellDoneCorrect  = isKitchenQuadratureCorrect                                        ||
                                                      isKitchenUtensilsCorrect; 

    let isConditionsForWellDoneCorrect              = isOneConditionFirstPartForWellDoneCorrect                         &&
                                                      isOneConditionSecondPartForWellDoneCorrect;

    let isRoastingMeatRARE                          = roastingMeatChoice                                    === "1";
    let isRoastingMeatMEDIUM                        = roastingMeatChoice                                    === "2";
    let isRoastingMeatWELLDONE                      = roastingMeatChoice                                    === "3";


    let isOrderCorrect                              = (isAllConditionsForRareCorrect  && isRoastingMeatRARE     )      || 
                                                      (isOneConditionForMediumCorrect && isRoastingMeatMEDIUM   )      ||
                                                      (isConditionsForWellDoneCorrect && isRoastingMeatWELLDONE );
    if(isOrderCorrect) {
        acceptedOrderMessage();
    }
};