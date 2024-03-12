const sumAll = function(min, max) {
let workingSum = 0;
for (let i = min; i < max + 1; i++) {
    workingSum += i;
}
return workingSum;
};

// Do not edit below this line
module.exports = sumAll;
