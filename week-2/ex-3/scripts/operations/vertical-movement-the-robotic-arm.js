const moveVerticalArm = (directionMoveRoboticArm, displacementValueOfTheRobotArm) => {

switch (directionMoveRoboticArm) {
    case "up":
        startPositionByX = displacementValueOfTheRobotArm;
        hoursOfOxygen -= displacementValueOfTheRobotArm - 1;
        console.log("Hours oxygen by Y: " + hoursOfOxygen);
        console.log("Start position up: " + startPositionByX);
        break;
    case "down":
        startPositionByY = -displacementValueOfTheRobotArm;
        hoursOfOxygen -= displacementValueOfTheRobotArm - 1;
        console.log("Hours oxygen by Y down: " + hoursOfOxygen);
        console.log("Start position down: " + startPositionByY);
        break;
    default:
        alert("Невалидна команда")
        break;
}
};