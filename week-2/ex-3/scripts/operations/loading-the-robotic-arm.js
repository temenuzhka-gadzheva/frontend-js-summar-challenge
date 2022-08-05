var isActiveRoboticArm = false;
var isActiveRoboticArmA = false;
var isActiveRoboticArmB = false;
var isActiveRoboticArmC = false;
var litersOfFuel        = 90;

const loadRoboticArm = (roboticArmName)  => {

    switch (roboticArmName) {
        case "A":
            litersOfFuel--;
            isActiveRoboticArm = true;
            isActiveRoboticArmA  = true;
            alert("Ръка A е включена успешно");
            console.log("Arm A from loaded component: " + isActiveRoboticArmA);
            break;
        case "B":
            litersOfFuel--;
            isActiveRoboticArm = true;
            isActiveRoboticArmB  = true;
            alert("Ръка В е включена успешно");
            break;
        case "C": 
            litersOfFuel--;
            isActiveRoboticArm = true;
            isActiveRoboticArmC  = true;
            alert("Ръка C е включена успешно");
            break;
        default:
            alert("Не разполагате с подобно устройство !");
            break;
    }
};