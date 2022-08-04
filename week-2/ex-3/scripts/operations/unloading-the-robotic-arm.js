const unloadRoboticArm = ()  => {

    if(isActiveRoboticArmA === true) {
        console.log("Arm A: " + isActiveRoboticArmA);
        isActiveRoboticArmA = false;
        isActiveRoboticArm = false;
        return alert(`Ръка A е изключена успешно`);
    }
    if(isActiveRoboticArmB === true) {
        console.log("Arm B: " + isActiveRoboticArmB);
        isActiveRoboticArmB = false;
        isActiveRoboticArm = false;
        return alert(`Ръка В е изключена успешно`);
    }
    if(isActiveRoboticArmC === true) {
        console.log("Arm C: " + isActiveRoboticArmC);
        isActiveRoboticArmC = false;
        isActiveRoboticArm = false;
        return  alert(`Ръка С е изключена успешно`);
    }

    return alert(`Все още няма активирана ръка !`);
};

