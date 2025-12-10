function funcName(args) {
    return typeof args;
}
console.log(funcName(4));
console.log(funcName("string"));
console.log(funcName({ value: 12 }));
console.log(funcName([1, 2, 3, 4, 5]));
export {};
