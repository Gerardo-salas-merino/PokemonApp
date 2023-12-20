import React from 'react'
import { useDispatch } from 'react-redux';
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setTrainerName(e.target.trainerName.value));

        //redireccionamos si ya hay algo en el input
        navigate("/pokedex")
    }

  return (
    <section className='grid grid-rows-[1fr_auto] h-screen overflow-hidden'>

        <div className='text-center justify-self-center self-center'>

            <main className='grid gap-8 '>
                <header className='flex '>
                    <img src='/media/pokedex.png' alt=''/>
                </header>
                <h1 className='text-5xl font-semibold text-red-500 '>¡Hello trainer!</h1>
                <p className='text-xl font-medium'>Para poder comenzar, dame tu nombre</p>
            </main>

            <form onSubmit={handleSubmit} className='mt-5 justify-center'>

                

                <input 
                    className='h-[40px] text-center w-[300px] outline-none shadow-md'
                    name='trainerName' 
                    type='text' placeholder='Introduce tu nombre' 
                    required 
                />
                
                <button 
                    className='text-white bg-red-500 w-[140px] h-[40px] rounded-sm hover:bg-red-400 '
                    type='submit'
                
                >
                    Comenzar
                </button>

            </form>


        </div>

        <Footer />
    </section>
  )
}

export default Home