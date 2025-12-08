// they are immutable
const s: readonly number[] = [1, 2, 3, 4, 5, 6];
const s2: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];

// its allowed to pass mutable array as with readonly params

function add(num: readonly number[]): number {
  let sum = 0;
  for (const ele of num) {
    sum += ele;
  }
  return sum;
}

const mutable = [1, 2, 3, 4, 5];
console.log(add(mutable));
