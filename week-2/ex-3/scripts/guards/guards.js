const isOperationProcessable = () => {
   return isOzoneMixerTurnOn;
}

const isRoboticArmLoaded = () => {
   return isActiveRoboticArm;
}

const isRoboticArmALoaded = () => {
   return isActiveRoboticArmA;
}

const isRoboticArmBLoaded = () => {
   return isActiveRoboticArmB;
}

const isRoboticArmCLoaded = () => {
   return isActiveRoboticArmC;
}

const unloadingArms = (command) => {

   if(isRoboticArmALoaded() == true && command === "unload") {
      isActiveRoboticArmA = false;
      isActiveRoboticArm = false;
      return alert("Ръка A е изключена успешно!");
 }
 
 if(isRoboticArmBLoaded() == true && command === "unload") {
      isActiveRoboticArmB = false;
      isActiveRoboticArm = false;
      return alert("Ръка B е изключена успешно!");
 }
 
 if(isRoboticArmCLoaded() == true && command === "unload") {
      isActiveRoboticArmC = false;
      isActiveRoboticArm = false;
      return alert("Ръка C е изключена успешно!");
  }
}



