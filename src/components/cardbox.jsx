import ut from "../scripts/utils.js";
export default function Cardbox() {
  let list;
  fetchItems(1, 20).then((v) => (list = v));

  async function fetchItems(start, count) {
    const arr = [];
    for (let i = start; i < start + count; i++) {
      const char = await ut.getChar(i);
      arr.push(char);
    }
    return arr;
  }
}
