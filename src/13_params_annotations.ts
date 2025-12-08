const bz: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const map = bz.map((n) => n * 2); // n : number takes inference
console.log(map);

// const map2 = (n) => n * 2  // it will be refer as type any because func any take any param

type hyp = {
  x: number;
  y: number;
};
function findHypo(vals: hyp): void {
  // prefer as give annotation
  const ans = Math.hypot(vals.x, vals.y);
  console.log(ans);
}
findHypo({ x: 12, y: 12 });
