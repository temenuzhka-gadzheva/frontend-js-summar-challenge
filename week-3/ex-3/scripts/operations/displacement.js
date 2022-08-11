const displacement = (inputArray) => {
    let displaceArray = [];

    inputArray.forEach(number => {
       let randomGenerateIndex = randomPositionGenerator(inputArray);
           displaceArray.splice(randomGenerateIndex,0,number);
    });

    return alert(`Вашият разбъркан списък от елементи изглежда така: ${displaceArray}`);
};