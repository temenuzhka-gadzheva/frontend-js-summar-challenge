var isOzoneMixerTurnOn = false;

const turnonOzoneMixer = () => {

    if(isOzoneMixerTurnOn) {
        alert("Системата вече е включена");
        return;
    } 

    isOzoneMixerTurnOn = true;
    alert("Системата е включена");
    
}