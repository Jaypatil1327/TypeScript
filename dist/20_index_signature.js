const dummy1 = {};
dummy1["happy"] = 2;
dummy1["sad"] = 2;
const dummy2 = {
    happy: 1,
    sad: 2,
    worst: 3,
};
const dummy3 = { happy: false, sad: true, bad: false };
const dummy4 = new Map();
dummy4.set("happy", 1);
dummy4.set("bad", 2);
dummy4.set("sad", 3);
console.log(dummy1, dummy2, dummy3, dummy4);
export {};
