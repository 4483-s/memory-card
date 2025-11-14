function oneTo500() {
  return Math.floor(Math.random() * 500) + 1;
}
async function getChar(id) {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(baseUrl);
  const obj = await res.json();
  return {
    name: obj.name,
    id: obj.id,
    imgUrl: obj.sprites.other["official-artwork"].front_default,
    imgUrlBak: obj.sprites.other.dream_world.front_default,
  };
}
const five = await getChar(100);
console.log(five);
export default {
  oneTo500,
  getChar,
};
