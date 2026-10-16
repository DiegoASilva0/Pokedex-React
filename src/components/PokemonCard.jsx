
function PokemonCard({pokemon}){
    return (<>
        <article className="w-fit justify-center">
             <div className="w-56 bg-white rounded-2xl border border-black p-6 transition hover:bg-amber-300">
                <span className="text-sm">#{pokemon.id}</span>
                <div className="items-center ">
                    <div className="flex justify-center">
                        <img className="h-40 w-40 object-contain"
                        src={pokemon.sprites.other?.["official-artwork"]?.front_default} 
                        alt={pokemon.name} />
                    </div>
                    <h2 className="p-5 text-center">{pokemon.name}</h2>
                    <div className="text-center">
                        <span className="bg-green-400 p-2 font-semibold rounded-xl m-1">Grass</span>
                        <span className="bg-purple-400 p-2 font-semibold rounded-xl m-1">Poison</span>
                    </div>
                </div>
            </div>
        </article>
    </>)
}

export default PokemonCard