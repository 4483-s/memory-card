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
function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
// import fs from "fs/promises";
// const result = await fetchItems(8, 12);
// fs.writeFile("./dummy.json", JSON.stringify(result));
// console.log(result);
function randomiseArray(arr) {
  const cp = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const j = randomIndex(arr);
    [cp[i], cp[j]] = [cp[j], cp[i]];
  }
  return cp;
}
// make sure at least one displayed item should be displayed at a time
function getItemsToDisplay(list, clickRecord, displayCount) {
  const notClicked = [];
  for (const i of list) {
    if (!clickRecord.has(i)) notClicked.push(i);
  }
  if (!notClicked.length)
    return randomiseArray(list).slice(0, displayCount + 1);

  const random = randomIndex(notClicked);
  const listWithoutSelected = list.filter((v) => v !== notClicked[random]);
  const randomised = randomiseArray(listWithoutSelected).slice(
    0,
    displayCount + 1,
  );
  randomised[randomIndex(randomised)] = notClicked[random];
  return randomised;
}
export default {
  oneTo500,
  getChar,
  fetchItems,
  randomiseArray,
  getItemsToDisplay,
};
