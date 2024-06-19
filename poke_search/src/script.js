const body = document.body;
const table = document.getElementsByTagName("table")[0];
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const form = document.getElementsByTagName("form")[0];
const imgDiv = document.getElementsByClassName("card-body-img")[0];
const typesDiv = document.getElementById("types");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const Hp = document.getElementById("hp");
const Attack = document.getElementById("attack");
const Defense = document.getElementById("defense");
const SpecialAttack = document.getElementById("special-attack");
const SpecialDefense = document.getElementById("special-defense");
const Speed = document.getElementById("speed");

const typeColor = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "#68A090",
  shadow: "#493963",
};

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
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value.toLowerCase()}`
    );

    const data = await res.json();

    updateUI(data, typeColor[data.types[0].type.name]);
  } catch (err) {
    alert("Pokémon not found");
    console.log(err);
    input.value = "";
  }
};

const UpdateCardHeader = (data) => {
  /* card-body-header */
  pokeName.textContent = data.name;
  pokeId.textContent = `#${data.id}`;
  pokeWeight.textContent = `Weight: ${data.weight}`;
  pokeHeight.textContent = `Height: ${data.height}`;
};

const UpdateCardImg = (data) => {
  /* card-body-img */
  imgDiv.innerHTML = `<img src="${data.sprites.front_default}" id="sprite" alt="${data.name}">`;
};

const UpdateCardType = (data, color) => {
  /* card-body-type */
  data.types.forEach((data) => {
    let pTag = document.createElement("p");
    pTag.style.backgroundColor = color;
    pTag.appendChild(document.createTextNode(data.type.name));
    typesDiv.appendChild(pTag);
  });
};

const UpdateCardStats = (data, color) => {
  /*card-stats*/
  table.style.backgroundColor = color;
  Hp.textContent = data.stats[0].base_stat;
  Attack.textContent = data.stats[1].base_stat;
  Defense.textContent = data.stats[2].base_stat;
  SpecialAttack.textContent = data.stats[3].base_stat;
  SpecialDefense.textContent = data.stats[4].base_stat;
  Speed.textContent = data.stats[5].base_stat;
};

const updateUI = (data, color) => {
  cleanUI();
  UpdateCardHeader(data);
  UpdateCardImg(data);
  UpdateCardType(data, color);
  UpdateCardStats(data, color);

  body.style.backgroundImage = `linear-gradient(to top, #2c3e50 30%, ${color} 100%)`;

  searchBtn.style.backgroundColor = color;
};

const cleanUI = () => {
  imgDiv.innerHTML = "";
  typesDiv.innerHTML = "";
};

const updateColor = (type) => {
  return typeColor[type];
};

searchBtn.addEventListener("click", () => {
  fetchData();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
