import React from 'react'

const Pgination = ({lastPage, PagesInCurrenBlock, setCurrentPage, currentPage}) => {
    
    const handlePreviusPage = () => {
        const previusPage = currentPage - 1;

        if(previusPage >= 0){
            setCurrentPage(previusPage);
        }
    }

    const handleNextPage = () => {
        const nexPage = currentPage + 1

        if(nexPage <= lastPage){
            setCurrentPage(nexPage)
        }
        
    }

    const handleFirstPage = () => {
        setCurrentPage(1)
    }

    const handleLastPage = () => {

        setCurrentPage(lastPage)

    }
  
    return (
    <ul className='pb-4 text-lg flex gap-2 justify-center font-bold flex-wrap'>
        <li>
            <button onClick={handleFirstPage}
                className='p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors bg-red-200'
            >
                {"<<"}
            </button>
        </li>
        <li>
            <button onClick={handlePreviusPage}
                className='p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors bg-red-200'
            >
                {"<"}
            </button>
        </li>

        {
            PagesInCurrenBlock.map((page) => (
                <li key={page}>
                    <button 
                        onClick={() => setCurrentPage(page)}
                        className={`p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors ${page === currentPage ? "bg-red-500 text-white" : "bg-red-200"}`}
                    >
                        {page}
                    </button>
                </li>
                
            ))
        }
        <li>
            <button onClick={handleNextPage }
                className='p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors bg-red-200'
            >
                {">"}
            </button>
        </li>
        <li>
            <button onClick={handleLastPage}
                className='p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors bg-red-200'
            >
                {">>"}
            </button>
        </li>

    </ul>

  )
}

export default Pgination