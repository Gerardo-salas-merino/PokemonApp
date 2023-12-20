import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { borderByType, gradientsByType } from "../constants/pokemon";
import { Link } from "react-router-dom";

const PokemonPreview = ({ pokemonURL}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null)

    

    useEffect(() => {
   
        axios.get(pokemonURL)
        .then(({ data }) => setPokemonInfo(data))
        .catch((err) => console.log(err))
        
    }, [])

  return (
    
    <Link to={`/pokedex/${pokemonInfo?.id}`} className={`border-8 ${borderByType[pokemonInfo?.types[0].type.name]} rounded-lg text-center grid gap-1`}>
        
        <header className={`${gradientsByType[pokemonInfo?.types[0].type.name]} relative h-[140px]`}>
            <img src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt='' 
                className='absolute bottom-0 translate-y-[35%] w-full p-12'
            />
        </header>

        <h3 className='capitalize text-lg font-bold pt-10'>
            {pokemonInfo?.name}
        </h3>
        <h4 className='capitalize text-sm font-semibold'>
            {pokemonInfo?.types.map((type) => type.type.name).join(" / ")}
        </h4>

        <h5 className='text-xs text-slate-400'>Types</h5>
        <hr />
        
        <ul className='grid grid-cols-2 gap-2 p-2'>
            {
                pokemonInfo?.stats.map((stat) => (
                    <li key={stat.stat.name}>
                        <h5 className='uppercase text-xs'>{stat.stat.name}</h5>
                        <span className='text-sm font-bold'>{stat.base_stat}</span>
                    </li>
                ))
            }
        </ul>
            
        


    </Link>

  )
}

export default PokemonPreview