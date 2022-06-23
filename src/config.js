const config = {
  APIURI: "https://pokeapi.co/api/v2/",
  PATHS: {
    firstCharge: "pokemon?limit=100&offset=0",
    searchPokemon: (pokemon) => `pokemon/${pokemon}`,
  },
};

export default config;
