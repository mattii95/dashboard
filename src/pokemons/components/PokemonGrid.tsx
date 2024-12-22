import { SimplePokemon } from "../types"
import PokemonCard from "./PokemonCard"

type PokemonGridProps = {
    pokemons: SimplePokemon[]
}

export default function PokemonGrid({ pokemons }: PokemonGridProps) {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} /> 
            ))}
        </div>
    )
}
