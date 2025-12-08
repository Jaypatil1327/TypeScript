// optional :

function greetUserOptional(username?: string) {
  const user = username ?? "Guest";
  return `Hello mr/mrs ${user}`;
}

console.log(greetUserOptional("john doe"));
console.log(greetUserOptional());

// nullish coalescing operator (??)
// if element at left is not falsy return it else right hand value

// default

function greetUserDefault(username: string = "Default") {
  return "Hello sir/madam " + username;
}

console.log(greetUserDefault("jack sparrow"));
console.log(greetUserDefault());
