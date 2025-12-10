function funcName<T>(args: T): string {
  return typeof args;
}

// it takes type from args and infers that type in function

console.log(funcName(4)); // number
console.log(funcName("string")); // string
console.log(funcName({ value: 12 })); // object
console.log(funcName([1, 2, 3, 4, 5])); // instance of array as Object
