type Direction = "left" | "right" | "up" | "down";

function helper(...d: Direction[]): void {
  console.log(d);
}
const val1 = "up";
let val2: Direction = "left";
helper(val1, val2);

//hence 'let' value can change later so TS don't allow to pass as params so it asks to use const and to do using let we should extent the type of Direction of existing obj schema only
