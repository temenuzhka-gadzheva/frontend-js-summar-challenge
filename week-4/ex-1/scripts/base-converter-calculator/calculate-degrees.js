const farenheit = 33.8;
const calculateDegrees = (degree, operation) => {
    let result;
    switch (operation) {
        case "F":
            result = `${degree * farenheit} F`;
            break;
    }
    return result;
};