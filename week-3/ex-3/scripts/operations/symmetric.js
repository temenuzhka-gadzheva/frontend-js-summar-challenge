const symmetric = (inputArray) => {

   let isArraySymmetric  = true;
   let arrayMiddleLength = (inputArray.length + 1) / 2;

    for (let i = 0; i < arrayMiddleLength; i++) {

       let element                   = inputArray[i];
       let elementInRightSideInArray = inputArray[inputArray.length - i - 1];

        if (element !== elementInRightSideInArray) {
            isArraySymmetric = false;
        }
    }
    if (isArraySymmetric === false) {

        alert(`Масивът: ${inputArray} не е симетричен!`);

        if(exitFromProgram() === true){
            return isUserExit;
        }
        
        return isArraySymmetric;
    }
    
    alert(`Масивът: ${inputArray}  е симетричен!`);

    if(exitFromProgram() === true){
        return isUserExit;
    }

    return isArraySymmetric;
};