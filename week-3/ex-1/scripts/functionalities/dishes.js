const dishesChoise = (data) => {

  let dishChoice         = prompt("Какво ще хапвате? "   +
                              "\n (1) Месо"              +
                              "\n (2) Вегетарианско"     +
                              "\n (3) Десерт");
    
  let isDishMeat         = dishChoice === "1";
  let isDishVegetarian   = dishChoice === "2";
  let isDishDessert      = dishChoice === "3";

  if(isDishMeat) {
    meatDish(data);
  }
  if(isDishVegetarian) {
    vegetarianDish(data);
  }
  if(isDishDessert) {
    dessertDish(data);
  }
}