"use strict";
const s = [1, 2, 3, 4, 5, 6];
const s2 = [1, 2, 3, 4, 5, 6];
function add(num) {
    let sum = 0;
    for (const ele of num) {
        sum += ele;
    }
    return sum;
}
const mutable = [1, 2, 3, 4, 5];
console.log(add(mutable));
