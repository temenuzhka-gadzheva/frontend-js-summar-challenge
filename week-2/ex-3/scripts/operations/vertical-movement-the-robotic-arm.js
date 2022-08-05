const moveVerticalArm = (directionMoveRoboticArm, displacementValueOfTheRobotArm) => {

switch (directionMoveRoboticArm) {
    case "up":
        startPositionByY += Number(displacementValueOfTheRobotArm);
        hoursOfOxygen -= Number(displacementValueOfTheRobotArm) - 1;
        break;
    case "down":
        if(startPositionByY === 1) {
            startPositionByY += -(Number(displacementValueOfTheRobotArm) + 1);
        }else {
            startPositionByY += -(Number(displacementValueOfTheRobotArm));
        }
        hoursOfOxygen -= Number(displacementValueOfTheRobotArm) - 1;
        break;
    default:
        alert("Невалидна команда")
        break;
}
};