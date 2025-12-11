const userA1 = {
  name: "Jay",
  age: 23,
  phone: 77534343,
  email: "jaypatil137@gmail.com",
  isWorking: false,
};

// T[isWorking] === T.isWorking

function getValue<T, K extends keyof T>(args: T, key: K): T[K] {
  return args[key];
}

console.log(userA1, "isWorking");

function setValue<T, K extends keyof T>(args: T, key: K, value: T[K]): void {
  args[key] = value;
  console.log(args);
}

console.log(userA1, "isWorking", 121);
