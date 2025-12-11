// functions

function ExtractUserDetails(id: string, isExtractUserInfo = false) {
  return {
    id,
    logs: isExtractUserInfo ? "details" : undefined,
  };
}

type extractUserInfoFromFunc = ReturnType<typeof ExtractUserDetails>; // {id , logs}
type extractUserInfoFromParams = Parameters<typeof ExtractUserDetails>; // [id , isExtractInfo]

// crate args
const params: extractUserInfoFromParams = [crypto.randomUUID(), true];

// after creating what to feed ' feed to function
const vals: extractUserInfoFromFunc = ExtractUserDetails(...params);

console.log(vals);

// Class

class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello mr/mrs ${this.name}`;
  }
}

const user200: ConstructorParameters<typeof User> = ["jay", 12];
const user201: InstanceType<typeof User> = new User(...user200);

console.log(user201);
