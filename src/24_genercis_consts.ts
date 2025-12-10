// that means whatever the type is it should have property length

const users = [
  { id: 1, name: "jack", age: 12 },
  { id: 2, name: "john", age: 20 },
  { id: 3, name: "mark", age: 14 },
  { id: 4, name: "robert", age: 32 },
];

function findLength<T extends { length: number }>(args: T): number {
  return args.length;
}

console.log(findLength("223"));
console.log(findLength([1, 2, 3, 4, 5]));
console.log(findLength({ name: "rohan", length: 12 }));

// key of
function particularKey<T, K extends keyof T>(args: T[], key: K) {
  console.log(key, "key");
  console.log(args, "Args");
}

// query resolver
function queryResolver<T, K extends keyof T>(args: T[], keys: K[]) {
  return args.map((item) => {
    const obj = {} as Pick<T, K>;
    for (const key of keys) {
      obj[key] = item[key];
    }
    return obj;
  });
}
particularKey(users, "id");
console.log(queryResolver(users, ["age", "name"] as const));
