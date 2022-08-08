const dessertDish = (data) => {

    let isAddictedToSugar              = prompt("Пристрастен ли сте към захарта?(Y/N)");
    let dessertChoice                  = prompt("Kакъв десерт предпочитате?"     + 
                                             "\n ТОРТА"                       + 
                                             "\n СЛАДОЛЕД"); 

    let isDessertCake                  = dessertChoice.toUpperCase() === "ТОРТА";
    let isDessertIcecream              = dessertChoice.toUpperCase() === "СЛАДОЛЕД";

    let isHaveFridgeInTheKitchen       = data.haveFridgeInTheKitchen.toUpperCase() === "Y";
    let isCloseTimeCorrect             = data.closeRestaurant === "19";
    let isHaveNotHoodInTheKitchen      = data.haveHoodInTheKitchen.toUpperCase() === "N";
    let moneyInCorrectRange            = Number(data.moneyInBankAccount) >= 15000 && Number(data.moneyInBankAccount) <= 50000;

    let isChefNameCorrect              = data.chefName.toUpperCase() === "РУМЕН";

    let cakeConditionsCorrect          = (isHaveFridgeInTheKitchen  ||
                                          isCloseTimeCorrect        ||
                                          isHaveNotHoodInTheKitchen ||
                                          moneyInCorrectRange)      ||
                                          isChefNameCorrect;
           
   let iceCreamConditions;
   let isNotAddictedToSugarYesAnswer   = isAddictedToSugar.toUpperCase() === "N";

   if(isDessertIcecream) {  

    let iceCreamChoice                 = prompt("Kакъв вкус сладолед предпочитате?"      + 
                                                 "\n ягода"                              + 
                                                 "\n банан"                              + 
                                                 "\n ванилия"); 

    let isTasteDifferentThanStrawberry = iceCreamChoice.toLocaleLowerCase()  !== "ягода";
    
    iceCreamConditions                 = isNotAddictedToSugarYesAnswer                  || 
                                         isTasteDifferentThanStrawberry;

   }

   let isOrderCorrect                  = (isDessertCake && cakeConditionsCorrect)  || 
                                         (isDessertIcecream && iceCreamConditions);

   if(isOrderCorrect){
       acceptedOrderMessage();
   }
};