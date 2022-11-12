const list = document.getElementById("event-list");
let count = 1;

// get https://rickandmortyapi.com/api/character/2

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
  //   list.innerHTML = null;

  //   // Append items to the list
  //   li.innerText = count.toString();
  //   list.appendChild(li);
}

// button.addEventListener("keyup", (evt) => {
//   if (evt.key === "Enter") {
//     console.log(form.value);
//     // Now add the item to the list!
//     render();
//   }
// });
