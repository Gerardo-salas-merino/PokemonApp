import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../Components/Header'
import { borderByType, gradientsByType } from "../constants/pokemon";

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null)

  const {id} = useParams();
  
  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255

    return percent + "%";
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(({ data }) => setPokemonInfo(data))
    .catch((err) => console.log(err))
    
  }, [])
  
  return (
    <section>
      <Header />
      <article className={`text-center max-w-[600px] mx-auto shadow-custom bg-[#fff] rounded-md mt-5`}>
        
          <header className={`${gradientsByType[pokemonInfo?.types[0].type.name]} h-[90px] justify-center flex relative`}>
            <img 
              className='absolute bottom-0 translate-y-[2%] w-[110px] h-[110px]'
              src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt='' 
            />
          </header>

          <div className='mt-2'>
            <span className='text-[#416460] lg:text-2xl font-medium'># {pokemonInfo?.id}</span>
            
            <h2 className='text-[#416460] lg:text-2xl font-medium'>{pokemonInfo?.name}</h2>
            <hr />
          </div>
          
          
          <div className='flex justify-center gap-24'>
            
            <div>
              <h5>Peso</h5>
              <span>{pokemonInfo?.weight}</span>
            </div>
            <div>
              <h5>Altura</h5>
              <span>{pokemonInfo?.height}</span>
            </div>

          </div>

          <section className='m-5'>
            <h2 className='flex ml-0 text-[#302F2F] font-medium text-3xl'>Stats</h2>
            <ul className='grid gap-3'>
              {
                pokemonInfo?.stats.map((stat) => (
                    
                  <li key={stat.stat.name}>

                    <div className='flex justify-between '>
                      <h5 className='capitalize'>{stat.stat.name}</h5>
                      <span>{stat.base_stat}/255</span>
                    </div>
                    {/* contenedor barra de progreso */}
                    <div className='h-6 bg-slate-200 rounded-sm overflow-hidden'>
                      {/* progreso  */}
                      <div style={{width: getPercentBarProgress(stat.base_stat) }} className='h-full bg-gradient-to-r from-orange-400 to-yellow-400 '></div>
                    </div>

                  </li>
                ))
              }
            </ul>

          </section>

      </article>
    </section>
  )
}

export default PokemonDetail