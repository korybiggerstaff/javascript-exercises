const repeatString = function(storedString, repeat) {
let returnedString = '';
    for (let i = 0; i < repeat; i++) {
        returnedString += storedString;
    }
return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
