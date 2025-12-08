// rest tuples

function tuples(...args: number[]) {
  // its will convert multiple args to array
  console.log(args);
}

tuples(1, 2, 3, 4, 5, 6);

function getDistance(...args: [number, number, number, number]): number {
  const x = args[0] - args[2];
  const y = args[1] - args[3];

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

// as const means only readable to changes and fixed size
const vals = [12, 12, 12, 12] as const;
console.log(getDistance(...vals));
