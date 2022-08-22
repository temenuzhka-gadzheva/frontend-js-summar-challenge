const calculateDegrees = (degree, operation) => {
let result;
    switch (operation) {
        case "F":
            result = `${degree * 33.8} F`;
            break;
    }
    return result;
};
calculateDegrees();