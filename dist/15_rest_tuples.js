function tuples(...args) {
    console.log(args);
}
tuples(1, 2, 3, 4, 5, 6);
function getDistance(...args) {
    const x = args[0] - args[2];
    const y = args[1] - args[3];
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
const vals = [12, 12, 12, 12];
console.log(getDistance(...vals));
export {};
