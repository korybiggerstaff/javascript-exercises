const sumAll = function(first, second) {
let workingSum = 0;
let min;
let max;
min = Math.min(first,second);
max = Math.max(first,second);
for (let i = min; i < max + 1; i++) {
    workingSum += i;
}
return workingSum;
};

// Do not edit below this line
module.exports = sumAll;
