async function greet() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("stringer"), 1000);
    });
}
async function getRecipes() {
    const res = await fetch("https://dummyjson.com/recipes");
    return res.json();
}
const getData = await getRecipes();
console.log(getData);
export {};
