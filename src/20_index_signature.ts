// index signature :
type IndexSign = { [k: string]: number }; // free in space
type IndexSign1 = Record<"happy" | "sad" | "bad", boolean>; // tighter bound of record
type IndexSign2 = Record<string, number>; // for loose record

const dummy1: IndexSign2 = {};
dummy1["happy"] = 2;
dummy1["sad"] = 2;

const dummy2: IndexSign = {
  happy: 1,
  sad: 2,
  worst: 3,
};

const dummy3: IndexSign1 = { happy: false, sad: true, bad: false };

// or we can use map
const dummy4 = new Map<string, number>();
dummy4.set("happy", 1);
dummy4.set("bad", 2);
dummy4.set("sad", 3);

console.log(dummy1, dummy2, dummy3, dummy4);
