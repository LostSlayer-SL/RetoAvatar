const pokemonContainer = document.querySelector ('.pokemon-container')
const spinner = document.querySelector("#spinner")

let offset =1;
let limit = 8;

previous.addEventListener('click',()=> {
if (offset !=1) {
removeChildNodes(pokemonContainer);
offset -=9;
fetchPokemons(offset,limit);
}
});


next.addEventListener('click',()=> {
removeChildNodes(pokemonContainer);
offset +=9;
fetchPokemons(offset,limit);

});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
}

function fetchPokemons(offset,limit) {
spinner.style.display = "block";
for (let i = offset; i <= offset + limit;i++){
    fetchPokemon(i);
    }
}

function createPokemon(pokemon){

const pokemonLink = document.createElement('a');
pokemonLink.href = `pokemon.html?id=${pokemon.id}`;

const card = document.createElement('div');
card.classList.add('pokemon-block');

const spriteContainer = document.createElement('div');
spriteContainer.classList.add('img-container');

const sprite = document.createElement('img','a');
sprite.src = pokemon.sprites.front_default;

spriteContainer.appendChild(sprite);

const number=document.createElement('p');
number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

const name = document.createElement('p');
name.classList.add('name');
name.textContent = pokemon.name;

pokemonLink.appendChild(sprite);
spriteContainer.appendChild(pokemonLink);

card.appendChild(spriteContainer);
card.appendChild(number);
card.appendChild(name);

pokemonContainer.appendChild(card);

}
function removeChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
}
}
fetchPokemons(offset,limit);