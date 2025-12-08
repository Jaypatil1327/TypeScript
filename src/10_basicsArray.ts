// ways to create a array
// Array<T> , T[] or directly create a array ,

const arr = [1, 2, 3, 4];
const arr11: number[] = [1, 2, 3, 45, 5];
const arr22: Array<number> = [3, 4, 6, 7, 8];

// array of union
// [1,'3', 'faf' , 3, 5] random
const arr33: (string | number)[] = ["jack", 1, "4", 4];

// union of array
// consistent array
const arr44: string[] | number[] =
  Math.random() > 0.5 ? [1, 2, 3, 4, 6] : ["2", "3", "q"];
