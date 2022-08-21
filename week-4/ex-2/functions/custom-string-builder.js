var data = ["This", "is", "super", "sample", "text", 5, 6];

function customStringBuilder(data, callback) {

    let modifiedData = [];

    if (callback === undefined) {
        data.forEach(element => {
            if (element === ",") { return }
            modifiedData.push(element);
        });
        return modifiedData.join(" ");
    }

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element === ",") { continue }
        modifiedData.push(callback(element));
    }

    return modifiedData.join("");
};

console.log(customStringBuilder(data, function (element) {
    return [` *${element}* `].join("");
}));

console.log(customStringBuilder(data));
