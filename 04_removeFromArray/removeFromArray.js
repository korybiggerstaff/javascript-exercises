const removeFromArray = function(inputArray, ...removedElement) {
    const returnedArray = []; //make a new array,
    inputArray.forEach((item) => { //take each element of the old array,
        if (!removedElement.includes(item)) { //check if the element is absent in the function arguments,
            returnedArray.push(item); //and, if it is absent, push it to our new array.
        }
    });
    return returnedArray; //return new array with only the elements we want to keep
}

// Do not edit below this line
module.exports = removeFromArray;
