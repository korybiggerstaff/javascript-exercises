const repeatString = function(storedString, repeat) {
    let returnedString = '';
    if (Math.sign(repeat) == -1) {
        return 'ERROR';
    }
    for (let i = 0; i < repeat; i++) {
            returnedString += storedString;
    }
    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
