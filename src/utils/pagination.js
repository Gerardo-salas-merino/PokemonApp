const paginatePokemons = (pokemons, currentPage) => {

    //cantidad de pokemons por pagina
    const POKEMONS_PER_PAGE = 20;

    //necesitamos los pokemons que se van a renderizar
    const sliceEnd = currentPage * POKEMONS_PER_PAGE;
    const sliceStart = sliceEnd - POKEMONS_PER_PAGE;

    const pokemonsInCurrentPage =  pokemons.slice(sliceStart, sliceEnd);

    //Ultima pagina o la cantidad de paginas
    const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);

    //Bloque actual 
    const PAGES_PER_BLOCK = 7;
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

    //arreglo con las paginas que se van a mostrar en el bloque actual
    const PagesInCurrenBlock = []
    const maxPage = actualBlock * PAGES_PER_BLOCK;
    const minPage = maxPage - PAGES_PER_BLOCK + 1;

    for(let i = minPage; i <= maxPage; i++){
        if(i <= lastPage){
            PagesInCurrenBlock.push(i)
        }
       
    }
    return {
        pokemonsInCurrentPage,
        lastPage,
        PagesInCurrenBlock,
    };

}

export { paginatePokemons };