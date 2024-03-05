const reverseString = function(beginningString) {//take a string, split it into elements in an array, reverse the array, then join the elements back together.
    const stringToArray = beginningString.split(""); 
    stringToArray.reverse();
    return stringToArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
