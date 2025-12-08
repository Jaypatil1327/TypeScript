// tuples are of fixed length and specified type at each index

const az: [string, number, boolean] = ["Jack", 12, false];
console.log(az);

type res = [status: number, json: object, success?: boolean]; // contains optional tuple
const azz: res = [201, { name: "jfm", age: 12, married: false }, false];

console.log(azz);

// it can be readonly
