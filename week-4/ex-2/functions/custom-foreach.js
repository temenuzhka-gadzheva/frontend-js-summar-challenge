function customForeach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

customForeach([1, 2, 3, 4], function (element) {
    console.log(element)
});
