import React, { useEffect, useState } from 'react'
import PokemonPreview from './PokemonPreview'
import Pgination from './Pgination'
import { paginatePokemons } from '../utils/pagination'

const PokemonList = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const {pokemonsInCurrentPage, lastPage, PagesInCurrenBlock } = paginatePokemons(pokemons, currentPage);
    
    
  useEffect(() => {
   setCurrentPage(1);
  }, [pokemons]);
  

  return (
    <section>
      <section className='grid grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] mx-auto gap-4 py-10'>

        {
          pokemonsInCurrentPage.map((pokemon) => (
            <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url}/>  
          ))
        }


      </section>

      <Pgination 
        lastPage={lastPage} 
        PagesInCurrenBlock={PagesInCurrenBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}

      />

    </section>
   
  )
}

export default PokemonList

