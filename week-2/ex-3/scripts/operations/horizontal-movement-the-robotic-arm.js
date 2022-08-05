const hoursOfOxygen  = 168;
const startPositionByX = 1;
const startPositionByY = 1;

const moveHorizontalArm = (directionMoveRoboticArm, displacementValueOfTheRobotArm) => {

    if(directionMoveRoboticArm === "right") {
        startPositionByX = displacementValueOfTheRobotArm;
        hoursOfOxygen -= displacementValueOfTheRobotArm - 1;
        console.log("Hours oxygen by X: " + hoursOfOxygen);
        console.log("Start position: " + startPositionByX);
        return [startPositionByX, hoursOfOxygen];
    }
    if(directionMoveRoboticArm === "left") {
        startPositionByX = -displacementValueOfTheRobotArm;
        hoursOfOxygen -= displacementValueOfTheRobotArm - 1;
        console.log("Hours oxygen by X left: " + hoursOfOxygen);
        console.log("Start position left: " + startPositionByX);
        return [startPositionByX, hoursOfOxygen];
    }
    else {
      return  alert("Невалидна команда")
    }
};