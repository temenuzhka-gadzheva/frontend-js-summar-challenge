let maxNumber = 0;
let minNumber = 0;
let randomNumber;

const randomPositionGenerator = (inputArray) => {

    maxNumber     = inputArray.length;
    randomNumber =  Math.floor(Math.random() * 
                   (maxNumber - minNumber)  + 
                    minNumber);

    return randomNumber;
};