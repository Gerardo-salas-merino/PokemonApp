import React from 'react'

const Header = () => {
  return (
    <header className='relative'>    

        <div className='h-12 bg-red-500 relative'>
          <div className='absolute w-[250px] sm:w-[300px] -bottom-2 left-2'>
            <img src='/media/pokedex.png' alt='' />
          </div>
        </div>

        <div className='h-10 bg-black'></div> 

        <div className='absolute right-0 -translate-x-[20%] z-20 h-[60%] bottom-2'>
          <img 
            className='h-full'
            src='/media/pokeball.png' alt='' 
          />
        </div>   
      </header>
  )
}

export default Header