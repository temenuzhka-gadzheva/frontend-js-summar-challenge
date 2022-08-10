let displaceArray = [];
let newIndex;
const displacement = (inputArray) => {

    inputArray.forEach(el => {
        newIndex = randomPositionGenerator(inputArray);
        displaceArray.push(el, newIndex);
    });

    console.log("New array: " + displaceArray);
};