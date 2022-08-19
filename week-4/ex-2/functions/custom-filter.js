function customFilter(array) {
    let filteredData = [];
    let currentElement;
    for (let i = 0; i < array.length; i++) {
        
        currentElement = array[i];

        if (callback(currentElement)) {
            filteredData.push(currentElement);
        }
    }
    return filteredData;
}

function callback(element) {
    return (element % 2 == 0)
}

console.log(customFilterFunction([1, 2, 3, 4, 5]));