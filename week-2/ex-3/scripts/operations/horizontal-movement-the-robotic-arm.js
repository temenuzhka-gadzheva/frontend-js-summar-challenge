let hoursOfOxygen  = 168;
let startPositionByX = 1;
let startPositionByY = 1;

const moveHorizontalArm = (directionMoveRoboticArm, displacementValueOfTheRobotArm) => {

    if(directionMoveRoboticArm === "right") {
        startPositionByX += Number(displacementValueOfTheRobotArm);
        hoursOfOxygen -= Number(displacementValueOfTheRobotArm) - 1;
        return;
    }
    if(directionMoveRoboticArm === "left") {
        if(startPositionByX === 1) {
            startPositionByX += -(Number(displacementValueOfTheRobotArm) + 1);
        }else {
            startPositionByX += -(Number(displacementValueOfTheRobotArm));
        }
        hoursOfOxygen -= Number(displacementValueOfTheRobotArm) - 1;
        return;
    }
    else {
      return  alert("Невалидна команда")
    }
};