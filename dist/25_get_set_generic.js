const userA1 = {
    name: "Jay",
    age: 23,
    phone: 77534343,
    email: "jaypatil137@gmail.com",
    isWorking: false,
};
function getValue(args, key) {
    return args[key];
}
console.log(userA1, "isWorking");
function setValue(args, key, value) {
    args[key] = value;
    console.log(args);
}
console.log(userA1, "isWorking", 121);
export {};
