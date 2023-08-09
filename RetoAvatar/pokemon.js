const pokemonContainer = document.querySelector ('.pokemon-detail')


const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

 fetchPokemon(pokemonId);

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      detailPokemon(data);

    });
}

function detailPokemon(pokemon){
const card = document.createElement('div');
card.classList.add('pokemon-template');

const spriteContainer = document.createElement('div');
spriteContainer.classList.add('img-container-detail');

const sprite = document.createElement('img');

sprite.src = pokemon.sprites.front_default;
sprite.classList.add('pokemon-image');

spriteContainer.appendChild(sprite);

const number=document.createElement('p');
number.classList.add('number');
number.textContent = "Numero en el Pokedex:  "+ `#${pokemon.id.toString().padStart(3,0)}`;


const name = document.createElement('h2');
name.classList.add('name');
name.textContent = pokemon.name;

const base_experience = document.createElement('p');
base_experience.classList.add('base_experience');
base_experience.textContent = "Experiencia Base:  "+pokemon.base_experience;

const height = document.createElement('p');
height.classList.add('height');
height.textContent ="Tamaño:  "+ pokemon.height;

const weight = document.createElement('p');
weight.classList.add('weight');
weight.textContent ="Peso:  "+ pokemon.weight;

card.appendChild(name);
card.appendChild(spriteContainer);
card.appendChild(number);
card.appendChild(base_experience);
card.appendChild(height);
card.appendChild(weight);

pokemonContainer.appendChild(card);
}

