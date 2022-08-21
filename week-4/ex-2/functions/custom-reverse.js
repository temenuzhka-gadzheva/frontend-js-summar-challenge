let firstData = [3, 5, 7, 8];
let nextData = [3, 5, 7, 8];
let data = [firstData, nextData];

function customReverse(data) {
    let reversedData = [];

    if (data.length > 1) {
        let currentArray = [];
        let reversedArrays = [];
        for (let i = 0; i < data.length; i++) {
            currentArray = data[i];
            reversedArrays.push(currentArray);
        }

        reversedArrays.forEach(array => {
            for (var i = array.length - 1; i >= 0; i--) {
                reversedData.push(array[i]);
            }
        });
        return reversedData;
    }

    for (var i = firstData.length - 1; i >= 0; i--) {
        reversedData.push(firstData[i]);
    }
    return reversedData;
}

console.log(customReverse(data));