import PokemonGrid from "@/pokemons/components/PokemonGrid"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Favoritos',
    description: 'Listado de Pokemons'
}

export default async function FavoritesPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global State</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    )
}
