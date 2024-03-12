const removeFromArray = function(inputArray, ...removedElement) {
    const returnedArray = [];
    inputArray.forEach((item) => {
        if (!removedElement.includes(item)) {
            returnedArray.push(item);
        }
    });
    return returnedArray;
}

// Do not edit below this line
module.exports = removeFromArray;
