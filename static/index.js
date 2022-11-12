const list = document.getElementById("event-list");
let count = 1;

function addChild() {
  try {
    fetch(`https://rickandmortyapi.com/api/character/${count}`)
      .then((response) => response.json())
      .then((result) => {
        console.log({ result });
        const li = document.createElement("li");
        li.innerText = result.name;
        list.appendChild(li);
        count += 1;
      });
  } catch (e) {
    console.error(e);
  }
}
