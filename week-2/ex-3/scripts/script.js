const hoursOfOxygen  = 168;

const manager = () => {
    
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
var moveRoboticArm;

var command = prompt("Моля въведете команда !");

if(command === "turnon") {
    turnonOzoneMixer();
    return;
}

if(!isOperationProcessable()) {
    return alert("Озонобъркачката не е включена - включете я преди да правите каквото и да е било");
}

if(unloadingArms(command)) {
     return;
}

if(isRoboticArmLoaded()) {
    return alert("Не може да включите, нова ръка ! Моля изключете предишната ръка !");
}

switch (command) {
    case "load":
         roboticArmName = prompt("Моля въведете името на ръката, която искате да активирате !");
         loadRoboticArm(roboticArmName);
         break;
    case "unload":
         unloadRoboticArm();
         break;
    case "moveX":
         moveRoboticArm = prompt("Въведете посока на местене на ръката(като число) !");
         moveHorizontalArm();
         break;
    case "moveY":
         moveRoboticArm = prompt("Въведете посока на местене на ръката(като число) !");
         moveVerticalArm();
         break;
    case "identify":
         identifyOzoneHole();
         break;
    case "cut":
         cutOzoneHole(randomNumber);
         break;
    case "fill":
          fillOzoneHole(randomNumber);
          break;
    case "finish":
          missionFinish();
          break;
    case "status": 
          missionStatus();
          break;
    default:
        alert("Командата, която сте въвели е невалидна !");
        break;
}
}

while(true){
    manager();
}