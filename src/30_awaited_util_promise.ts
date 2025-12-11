type Promise1 = Awaited<string>;
type Promise2 = Awaited<Promise<string>>;
type Promise3 = Awaited<Promise<Promise<number>>>;

async function greet() {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("stringer"), 1000);
  });
}

type trial = Awaited<ReturnType<typeof greet>>;

async function getRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");
  return res.json();
}

// get schema what kind of data you gonna get
type response = Awaited<ReturnType<typeof getRecipes>>;

// await can be used before call async function in ts
const getData: response = await getRecipes();
console.log(getData);
