const payed: string | undefined = "payed to mick";

// when func doesn't return anything use void
function checkPassword(
  oldPass: string,
  newPass: string,
  optionalArg1?: string,
  optionalArg2?: string
): void {
  if (oldPass === newPass) {
    console.log("passwords are same");
  } else {
    console.log("changed successfully");
  }
}

// DO NOT USE "any" because code can explode and throw a random error
const anyValue: any = JSON.parse("{username : `mick`}");
// console.log(anyValue.age);
// above line throws error

function iWillThrowError(username?: string): never {
  // for throwing error we should define does it will throw error or not
  throw new Error(username);
}
