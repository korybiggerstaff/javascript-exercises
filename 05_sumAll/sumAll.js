const sumAll = function(first, second) {
let workingSum = 0;
let min;
let max;
min = Math.min(first,second);
max = Math.max(first,second);
if (Math.sign(first) == -1 ||
    Math.sign(second) == -2 ||
    isNaN(first) ||
    isNaN(second)) {
    return "ERROR";
}
for (let i = min; i < max + 1; i++) {
    workingSum += i;
}
return workingSum;
};

// Do not edit below this line
module.exports = sumAll;
