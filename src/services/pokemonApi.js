

const URL = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`

let pokemon = [];

async function chamarPokemon() {
    try {
        const response = await fetch(URL)
        if(response.status === 200){
            const resultado = await response.json();
            
            const detalhes = await Promise.all(
                resultado.results.map(async (pokemon) => {
                    const resposta = await fetch(pokemon.url)
                    return resposta.json()
                })
                )

            return detalhes
        } else {
            alert("Não foi possível carregar os Pokemon.")
        }
    } catch {
        alert("Não foi possivel carregar os Pokemon.")
    }
}

export default chamarPokemon;