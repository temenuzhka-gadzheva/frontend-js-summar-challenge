let countOfOzoneHoles = prompt("Колко озонови дупки искате да запълните ?");
console.log("Count of the ozone hole: " + countOfOzoneHoles);
let ozoneHoleCoordinateX = randomNumberForTheCoordinatesOfTheOzoneHole();
let ozoneHoleCoordinateY = randomNumberForTheCoordinatesOfTheOzoneHole();


if(countOfOzoneHoles > 1){
    alert(`Озоноеата дупка  се намира на X - ${ozoneHoleCoordinateX} и Y - ${ozoneHoleCoordinateY}`);
    countOfOzoneHoles--;
}else if(countOfOzoneHoles === 1) {
    alert(`Озоноеата дупка  се намира на X - ${ozoneHoleCoordinateX} и Y - ${ozoneHoleCoordinateY}`);
    countOfOzoneHoles--;
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


while(true) {
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
    } else {
        alert("Ok");
        break;
      }
   }
    manager();
}