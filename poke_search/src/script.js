const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const form = document.getElementsByTagName("form")[0];
const imgDiv = document.getElementsByClassName("card-body-img")[0];
const typesDiv = document.getElementById("types");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const validateInput = (input) => {
  return input === "" ? true : false;
};

const fetchData = async () => {
  try {
    if (validateInput(input.value)) {
      alert("insert a valid input");
      return; //don't fetch data
    }

    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value}`
    );

    const data = await res.json();

    /* console.log(data); */

    updateUI(data);
  } catch (err) {
    alert("Pokémon not found");
    console.log(err);
    input.value = "";
  }
};

const updateUI = (data) => {
  /* card-body-header */
  pokeName.textContent = data.name;
  pokeId.textContent = `#${data.id}`;
  pokeWeight.textContent = `Weight: ${data.weight}`;
  pokeHeight.textContent = `Height: ${data.height}`;

  /* card-body-img */
  imgDiv.innerHTML = `<img src="${data.sprites.front_default}" class="center" alt="${data.name}">`;

  /*TODO*/
  /* card-body-type 
  data.types.forEach((type) => {
    let pTag = document.createElement("p");
  });
  */

  /*card-stats*/
};

searchBtn.addEventListener("click", () => {
  fetchData();
});
