export type PokemonsResponse = {
    count: number,
    next: number,
    previous: null,
    results: PokemonResult[]
}

export type PokemonResult = {
    name: string,
    url: string
}