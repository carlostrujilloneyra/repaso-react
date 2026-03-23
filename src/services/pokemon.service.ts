export const fetchPokemonById = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    base_experience: data.base_experience,
  };
};
