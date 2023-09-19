
export const Paginacion = ({cambiarPagina, paginaActual}) => {
  return (
    <>
      <div className="flex justify-around py-6 items-center md:justify-center md:gap-8 ">
        <button className='hidden md:flex py-2 px-4 bg-cardDark text-darkText font-semibold rounded-md text-lg shadow-md shadow-slate-800' onClick={() => cambiarPagina(paginaActual - 1)}> Previous Page </button>
        <button className='hidden md:flex py-2 px-4 bg-cardDark text-darkText font-semibold rounded-md text-lg shadow-md shadow-slate-800' onClick={() => cambiarPagina(paginaActual + 1)}> Next Page </button>
        <button className='flex md:hidden' onClick={() => cambiarPagina(paginaActual - 1)}> Previous </button>
        <button className='flex md:hidden' onClick={() => cambiarPagina(paginaActual + 1)}> Next </button>
        <p className='text-darkText px-4 py-2 font-semibold bg-cardDark rounded-md text-lg'>
          {paginaActual}
        </p>
      </div>   
    </>
  )
}
