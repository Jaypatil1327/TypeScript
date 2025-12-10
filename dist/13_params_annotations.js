const bz = [1, 2, 3, 4, 5, 6, 7, 8];
const map = bz.map((n) => n * 2);
console.log(map);
function findHypo(vals) {
    const ans = Math.hypot(vals.x, vals.y);
    console.log(ans);
}
findHypo({ x: 12, y: 12 });
export {};
