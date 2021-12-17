import FetchData from "../../classes/FetchData";
import Pokemon from "../../classes/Pokemon";

const pokemonsData = new FetchData();
const pokemonsSection = <HTMLDivElement>document.querySelector(".pokemons-cards-container");

pokemonsData.getData("https://pokeapi.co/api/v2/pokemon/").then((data) =>
  data.results.map((data: any) => {
    pokemonsData.getData(data.url).then((data) => {
      const pokemon = new Pokemon(
        data.name,
        data.types[0].type.name,
        data.sprites.other.dream_world.front_default
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
  })
);
