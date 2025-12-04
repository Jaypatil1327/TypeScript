// inference is ts knows the js

const count = 100; // ts see it as count : number = 100 ;
const count2: number = 100; // count == count2
const str = "Hello world";

// but in case of number we should define params and return type

function add(a: number, b: number): number {
  return a + b;
}

// you should annotate it if its not known or obvious
let random: number | string;
random = Math.ceil(Math.random() * 100) > 5 ? 12 : "its greater than 5";
console.log(random);

export { add };
