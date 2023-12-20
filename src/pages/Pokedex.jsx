import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonList from '../Components/PokemonList';
import axios from 'axios';
import Header from '../Components/Header';


const Pokedex = () => {
  const trainerName = useSelector((store) => store.trainerName.name)
  
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  const [Types, setTypes] = useState([])

  const pokemonByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName))
 

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.pokemonName.value;
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim());

  };
 
  useEffect(() => {
   
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292")
    .then(({ data }) => setAllPokemons(data.results))
    .catch((err) => console.log(err))
    
  }, [])

  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/type")
    .then(({ data }) => setTypes(data.results))
    .catch((err) => console.log(err))
  }, [])
  
  const handleChangeType = (e) => {
    const URL = e.target.value;
    
    axios.get(URL)
    .then(({ data }) => {

      if(URL.includes("type")){
        //obtuvimos pokemoms por tipo
        const pokemonsFormat = data.pokemon.map((pokemon) => pokemon.pokemon)
        
        setAllPokemons(pokemonsFormat);
      }else{
        //obtuvimos todos los pokemons
        setAllPokemons(data.results);
      }

    })
    .catch((err) => console.log(err))
  }  

  return (
    <section>
      <Header />
      
      <main>
        <p className='lg:text-center lg:text-xl lg:font-medium md:text-center'>
          <b className='text-red-500'>Bienvenido {trainerName}</b>, aqui podrás encontrar tu pokemón favorito
        </p>

        <form onSubmit={handleSubmit} className='lg:flex md:flex md:justify-center md:items-center md:gap-8 md:mt-5'>
           
          <div>
              <input 
                className='border h-[41px] text-center w-[250px] outline-none shadow-md'
                name='pokemonName' 
                type='text' 
                placeholder='Busca un pokemon' 
              />
              <button
                className='text-white bg-red-500 w-[140px] h-[40px] rounded-sm hover:bg-red-400'
              >
                Buscar
                
              </button>
            </div>

            <select onChange={handleChangeType} className='shadow-md lg:h-[40px] w-[200px] border'>

              <option 
                className='w-[200px] outline-none'
                value="https://pokeapi.co/api/v2/pokemon?limit=1292">
                Todos los pokemones
              
              </option>
              {
                Types.map((type) => (
                  <option 
                    value={type.url}
                    className='capitalize'
                    key={type.name}>
                    {type.name}

                  </option>
                ))
              }

            </select>


          </form>
        <PokemonList pokemons={pokemonByName} />

      </main>
    </section>
  )
}

export default Pokedex