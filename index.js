async function getAllPokemons() {
  const pokemons = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=300&limit=15",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

  return pokemons;
}

async function getPokemonInfo(name) {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await request.json();
  return response;
}

async function renderPokemon() {
  const pokemons = await getAllPokemons();
  const pokemonsBeforeName = pokemons.results;
  const section = document.querySelector("section");
  pokemonsBeforeName.forEach(async (element) => {
    const pokeInfo = await getPokemonInfo(element.name);

    section.insertAdjacentHTML(
      "beforeend",
      `   
        <div class = "box_pokemon-cards">
            <div class = "box-img"> <img class = "box_pokemon-img" src=${pokeInfo.sprites.back_default} alt=${pokeInfo.name}></div>
            <div class="box-title">
                <h2 class = "pokemon-name"> ${pokeInfo.name} </h2> 
            </div>
        </div>
        
        `
    );
  });
}
// renderPokemon();
$(".slick-slider").slick({
  dots: true,
  Infinity: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<i class="fa-solid fa-angle-left left_arrow"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right right_arrow"></i>',
  speed: 800,
  autoplaySpeed: 2000,
});

