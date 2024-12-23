"use client"
import React, { useEffect, useState } from 'react'
import PokemonGrid from './PokemonGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export default function PokemonsFavorite() {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))
    // const [pokemons, setPokemons] = useState(favoritePokemons)

    // useEffect(() => {
    //     setPokemons(favoritePokemons)
    // }, [favoritePokemons])

    return (
        <>
            {
                favoritePokemons.length === 0
                    ? <NoFavorites />
                    : <PokemonGrid pokemons={favoritePokemons} />
            }
        </> 
    )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50] items-center justify-center">
            <IoHeartOutline className="text-red-500 size-60" />
            <span>No hay favoritos</span>
        </div>
    )
}
