let countOfOzoneHoles = prompt("Колко озонови дупки искате да запълните ?");
console.log("Count of the ozone hole: " + countOfOzoneHoles);
let ozoneHoleCoordinateX = randomNumberForTheCoordinatesOfTheOzoneHole();
let ozoneHoleCoordinateY = randomNumberForTheCoordinatesOfTheOzoneHole();
let isEnoughtFuel = true;
let isEnoughtOxygen = true;
let isOzoneHolesFilled = false;


if(countOfOzoneHoles > 1){
    alert(`Озоноеата дупка  се намира на X - ${ozoneHoleCoordinateX} и Y - ${ozoneHoleCoordinateY}`);
    countOfOzoneHoles--;
}else if(countOfOzoneHoles === 1) {
    alert(`Озоноеата дупка  се намира на X - ${ozoneHoleCoordinateX} и Y - ${ozoneHoleCoordinateY}`);
    countOfOzoneHoles--;
}

if (hoursOfOxygen <= 24){
      isEnoughtOxygen = false;
      alert("Достигнахме критичен кислороден минимум !");
}
if(litersOfFuel <= 0){
      isEnoughtFuel = false;
      alert("Няма гориво в резервоара, моля презареди");
 }

 if(countOfOzoneHoles === 0 && isFinishActive === true){
    isOzoneHolesFilled = true;
     alert("Мисията е изпълнена успешно !");
  } 

console.log("Меню с команди"                                     );
console.log("turnon. Включване на озонобъркачката"               );
console.log("load. Включване на роботска ръка"                   );
console.log("unload. Изключване на роботска ръка"                );
console.log("moveX. Преместване на роботска ръка по хоризонтала" );
console.log("moveY. Преместване на роботска ръка по вертикала"   );
console.log("identify. Идентифициране на озонова дупка"          );
console.log("cut. Изрязване на озонова дупка"                    );
console.log("fill. Запълване на озонова дупка "                  );
console.log("finish. Запечатване на запълнената дупка"           );
console.log("status. Статус на мисията"                          );

var roboticArmName;
var directionMoveRoboticArm;
var displacementValueOfTheRobotArm;
let isFinishActive = false;  
let sealedOzoneHoles = 0;


while(true) {

    if(countOfOzoneHoles === 0 && isFinishActive === true){
        isOzoneHolesFilled = true;
         alert("Мисията е изпълнена успешно !");
         break;
      } 
    if (hoursOfOxygen <= 24){
          isEnoughtOxygen = false;
          alert("Достигнахме критичен кислороден минимум !");
          break;
    }
    if(litersOfFuel <= 0){
          isEnoughtFuel = false;
          alert("Няма гориво в резервоара, моля презареди");
          break;
     }
    if(isFinishActive === true) {
      ozoneHoleCoordinateX = randomNumberForTheCoordinatesOfTheOzoneHole();
      ozoneHoleCoordinateY = randomNumberForTheCoordinatesOfTheOzoneHole();
      isFinishActive = false;

      if(countOfOzoneHoles > 1){
          alert(`Озоноеата дупка  се намира на X - ${ozoneHoleCoordinateX} и Y - ${ozoneHoleCoordinateY}`);
          countOfOzoneHoles--;
      } else if(countOfOzoneHoles === 1) {
        alert(`Озоноеата дупка  се намира на X - ${ozoneHoleCoordinateX} и Y - ${ozoneHoleCoordinateY}`);
        countOfOzoneHoles--;
    } else if(countOfOzoneHoles === 0){
        isOzoneHolesFilled = true;
        alert("Ok");
      } else if (hoursOfOxygen <= 24){
          isEnoughtOxygen = false;
      } else if(litersOfFuel <= 0){
          isEnoughtFuel = false;
      }
   }
    manager();
}