
const manager = () => {
     let command = prompt("Моля въведете команда !");
    if(isFinishActive === true) {
     return;
     }

    while(true){

    /* if(isFinishActive === true) {
          alert("First finish");
          return;
      }*/
     if(command === "turnon") {
          turnonOzoneMixer();
          return;
      }
     if(command === "status") {
          remainingResources();
          return;
     }
      
      if(!isOperationProcessable()) {
          return alert("Озонобъркачката не е включена - включете я преди да правите каквото и да е било");
      }
      
      if(command === "unload") {
           unloadRoboticArm();
           return;
      }
      
      if(command === "moveX" || command === "moveY") {
      
           if(isActiveRoboticArm === false) { 
                return alert("Моля активирайте ръка преди да я местите !");
           }
      
           directionMoveRoboticArm = prompt("Въведете посока на местене на ръката !");
           displacementValueOfTheRobotArm = prompt("Въведете позицията, на която искате да преместите ръката !");
           
           if(command === "moveX") {
      
                moveHorizontalArm(directionMoveRoboticArm,displacementValueOfTheRobotArm);
                return;
           }
           moveVerticalArm(directionMoveRoboticArm,displacementValueOfTheRobotArm);
           return;
      }
      
      if(command === "identify") {
           identifyOzoneHole();
           return;
      }
      
      if(command === "cut") {
           if(isAlreadyIdentificateOzoneHole() === false) {
                return alert("Все още няма идентифицирана озонова дупка. Моля, индетифицирайте !");
           }     
           cutOzoneHole();
           return;
      }
      
      if(command === "fill") {
           if(isAlreadyActivateCutOzoneHole() === false) {
                return alert("Все още озоновата дупка не е изрязана. Моля, изрежете я !");
           }
           fillOzoneHole();
           return;
      }
      
      if(command === "finish") {
           if(isAlreadyActivateFillOzoneHole() === false) {
                return alert("Все още озоновата дупка не е запълнена. Моля, запълнете я !");
           }

           finishOfWorkOnTheOzoneHole();
           isFinishActive = true;
           break;
      }
      
      if(isRoboticArmLoaded()) {
           return alert("Не може да включите, нова ръка ! Моля изключете предишната ръка !");
      }
      
      if(command === "load") {
           roboticArmName = prompt("Моля въведете името на ръката, която искате да активирате !");
           loadRoboticArm(roboticArmName);
           return;
      }
  }
}