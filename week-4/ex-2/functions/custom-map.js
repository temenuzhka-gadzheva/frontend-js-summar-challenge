function customMap(array) {
    let mapped = [];
    let currentElement;
    let mappedElement;
    for (let i = 0; i < array.length; i++) {
        currentElement = array[i];
        mappedElement = callback(currentElement);

        mapped.push(mappedElement);
    }
    return mapped;
}

function callback(element) {
    return (element * 2);
}

console.log(customMap([1, 2, 3, 4, 5]));