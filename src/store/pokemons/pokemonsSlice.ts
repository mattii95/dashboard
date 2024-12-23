import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons/types';

type PokemonsState = {
    favorites: {
        [key: string]: SimplePokemon
    }
}

// const getInitialState = (): PokemonsState => {
//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
//     return favorites
// }

const initialState: PokemonsState = {
    favorites: {}
    // ...getInitialState()
    // '1': { id: '1', name: 'bulbasaur' },
    // '6': { id: '6', name: 'charizard' },
    // '14': { id: '14', name: 'kakuna' },
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload
        },
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload
            const { id } = pokemon

            if (!!state.favorites[id]) {
                delete state.favorites[id]
            } else {
                state.favorites[id] = pokemon
            }

            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))

        }
    }
});

export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer