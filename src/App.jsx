import { useEffect, useState } from "react"
import PokemonCard from "./components/PokemonCard"
import chamarPokemon from "./services/pokemonApi"

function App(){
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    chamarPokemon().then((resultado) => {
      setPokemons(resultado)
    })
  }, [])

  return (<>
    <main className="grid grid-cols-1 justify-items-center gap-10 p-10 text-center sm:grid-cols-2 lg:grid-cols-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </main>
    

  </>)
}

export default App