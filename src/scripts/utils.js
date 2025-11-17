function oneTo500() {
  return Math.floor(Math.random() * 500) + 1;
}
async function getChar(id) {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(baseUrl);
  const obj = await res.json();
  return {
    name: obj.name,
    url: obj.sprites.other["official-artwork"].front_default,
  };
}
async function fetchItems(start, count) {
  const arr = [];
  for (let i = start; i < start + count; i++) {
    const char = await getChar(i);
    arr.push(char);
  }
  return arr;
}
// import fs from "fs/promises";
// const result = await fetchItems(8, 12);
// fs.writeFile("./dummy.json", JSON.stringify(result));
// console.log(result);
function randomiseArray(arr) {
  const cp = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * arr.length);
    [cp[i], cp[j]] = [cp[j], cp[i]];
  }
  return cp;
}
export default {
  oneTo500,
  getChar,
  fetchItems,
  randomiseArray,
};
