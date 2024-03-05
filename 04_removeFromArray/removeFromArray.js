const removeFromArray = function(fullArray, removeElement) {
    for (let i = 0; i < fullArray.length; i++) {
        if (removeElement == fullArray[i]){
            fullArray.splice(i, 1).pop();
            return fullArray;
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
