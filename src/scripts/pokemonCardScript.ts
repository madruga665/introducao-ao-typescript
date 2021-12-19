import FetchData from "../../classes/FetchData";
import Pokemon from "../../classes/Pokemon";

const pokemonsData = new FetchData();
const pokemonsSection = <HTMLDivElement>document.querySelector(".pokemons-cards-container");

const pokemonCard = (pokemon: Pokemon) => {
  const card = <HTMLDivElement>document.createElement("div");
  card.classList.add("card-container");
  card.classList.add("pokemon-card");
  pokemonsSection.appendChild(card);

  const cardImg = <HTMLImageElement>document.createElement("img");
  cardImg.style.width = "50px";
  cardImg.src = pokemon.picture;
  card.appendChild(cardImg);

  const cardName = <HTMLHeadingElement>document.createElement("h3");
  cardName.innerText = pokemon.name;
  card.appendChild(cardName);

  const cardType = <HTMLParagraphElement>document.createElement("p");
  cardType.innerText = `Type: ${pokemon.type.substring(0, 1).toUpperCase()}${pokemon.type.substring(1)}`;
  card.appendChild(cardType);

  const cardId = <HTMLParagraphElement>document.createElement("p");
  cardId.innerText = `#${pokemon.id}`;
  card.appendChild(cardId);
};

window.onload = async () => {
  const data = await pokemonsData.getData("https://pokeapi.co/api/v2/pokemon/");
  data.results.map(async (data: any) => {
    const pokemonDetails = await pokemonsData.getData(data.url);
    const pokemon = new Pokemon(
      pokemonDetails.name,
      pokemonDetails.types[0].type.name,
      pokemonDetails.sprites.other.dream_world.front_default,
      pokemonDetails.id
    );
    pokemonCard(pokemon);
  });
};

let offset = 0;

window.addEventListener("scroll", async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    offset += 20;
    const nextData = await pokemonsData.getData(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
    console.log(nextData.next);
    console.log(offset);
    nextData.results.map(async (data: any) => {
      const pokemonDetails = await pokemonsData.getData(data.url);
      const pokemon = new Pokemon(
        pokemonDetails.name,
        pokemonDetails.types[0].type.name,
        pokemonDetails.sprites.other.dream_world.front_default,
        pokemonDetails.id
      );
      pokemonCard(pokemon);
    });
  }
});
