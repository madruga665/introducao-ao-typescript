import FetchData from "../../classes/FetchData";
import Pokemon from "../../classes/Pokemon";

const pokemonsData = new FetchData();
const pokemonsSection = <HTMLDivElement>document.querySelector(".pokemons-cards-container");

window.onload = async () => {
  const data = await pokemonsData.getData("https://pokeapi.co/api/v2/pokemon/");
  data.results.map(async (data: any) => {
    const pokemonDetails = await pokemonsData.getData(data.url);
    const pokemon = new Pokemon(
      pokemonDetails.name,
      pokemonDetails.types[0].type.name,
      pokemonDetails.sprites.other.dream_world.front_default
    );

    const card = document.createElement("div");
    card.classList.add("card-container");
    card.classList.add("pokemon-card");
    pokemonsSection.appendChild(card);

    const cardImg = document.createElement("img");
    cardImg.style.width = "50px";
    cardImg.src = pokemon.picture;
    card.appendChild(cardImg);

    const cardName = document.createElement("h3");
    cardName.innerText = pokemon.name;
    card.appendChild(cardName);

    const cardType = document.createElement("p");
    cardType.innerText = pokemon.type;
    card.appendChild(cardType);
  });
};
