const dishesChoise = (data) => {

  let dishChoise         = prompt("Какво ще хапвате? "   +
                              "\n (1) Месо"              +
                              "\n (2) Вегетарианско"     +
                              "\n (3) Десерт");
    
  let isDishMeat         = dishChoise === "1";
  let isDishVegetarian   = dishChoise === "2";
  let isDishDessert      = dishChoise === "3";

  if(isDishMeat) {
    meatDish(data);
  }
  if(isDishVegetarian) {
    vegetarianDish(data);
  }
}