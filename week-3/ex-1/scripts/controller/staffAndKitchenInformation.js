const staffAndKitchenRequiredQuestions = () => {

    let countOfPans                      = prompt("Колко тигана има в кухнята?");
    let countOfPots                      = prompt("Колко тенджери има в кухнята?");
    let kitchenWidthInCentimeters        = prompt("Колко сантиметра е широка кухнята?");
    let kitchenLenghtInCentimeters       = prompt("Колко сантиметра е дълга кухнята?");
    let kitchenHeightInCentimeters       = prompt("Колко сантиметра е висока кухнята?");
    let chefName                         = prompt("Как се казва главният готвач?");
    let countOfCooks                     = prompt("Колко готвачи работят в кухнята?");
    let countOfWaiters                   = prompt("Колко сервитьори работят в ресторанта?");
    let nameOfTheResponsibleForTheSauces = prompt("Как се казва отговорника на сосовете ?");
    let minThemperatureInTheKitchen      = prompt("Каква е минималната температура в кухнята?");
    let maxTemperatureInTheKitchen       = prompt("Каква е максималната температура в кухнята?");
    let moneyInBankAccount               = prompt("Колко парички имате в банковата си сметка?");
    let dailyTurnover                    = prompt("Колко парички е дневният оборот на ресторанта ви?");
    let openRestaurant                   = prompt("В колко часа отваряте?");
    let closeRestaurant                  = prompt("В колко часа затваряте?");

    let additionalQuestionsAnswer        = prompt("Желаете ли да отговаряте на опционални въпроси? (Y/N)");
    let isAnswerYes                      = additionalQuestionsAnswer.toUpperCase() === "Y";
    let data                             = {};
    let isAnswerOfOptionQuestion         = false;
    if(isAnswerYes) {
     
        let haveFridgeInTheKitchen        = prompt("Разполагате ли с хладилник? (Y/N)");
        let haveGasStoveInTheKitchen      = prompt("Разполагате ли с газов котлон? (Y/N)");
        let haveConvectionOvenInTheKitchen= prompt("Разполагате ли с конвектомат? (Y/N)");
        let haveElectricGrillInTheKitchen = prompt("Разполагате ли с електрическа скара? (Y/N)");
        let haveHoodInTheKitchen          = prompt("Разполагате ли с аспиратор? (Y/N)");
            isAnswerOfOptionQuestion      = true;
        data = {countOfPans,
                countOfPots,
                kitchenWidthInCentimeters,
                kitchenLenghtInCentimeters,
                kitchenHeightInCentimeters,
                chefName,countOfCooks,
                countOfWaiters,
                nameOfTheResponsibleForTheSauces,
                minThemperatureInTheKitchen,
                maxTemperatureInTheKitchen,
                moneyInBankAccount,
                dailyTurnover,
                openRestaurant,
                closeRestaurant,
                haveFridgeInTheKitchen, 
                haveGasStoveInTheKitchen,
                haveConvectionOvenInTheKitchen,
                haveElectricGrillInTheKitchen,
                haveHoodInTheKitchen,
                isAnswerOfOptionQuestion};
    } else {
          
    data = {countOfPans,
            countOfPots,
            kitchenWidthInCentimeters,
            kitchenLenghtInCentimeters,
            kitchenHeightInCentimeters,
            chefName,countOfCooks,
            countOfWaiters,
            nameOfTheResponsibleForTheSauces,
            minThemperatureInTheKitchen,
            maxTemperatureInTheKitchen,
            moneyInBankAccount,
            dailyTurnover,
            openRestaurant,
            closeRestaurant};
    }

    alert("Всички въпроси са зададени.");
    return data;
};