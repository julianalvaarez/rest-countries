import { Link } from "react-router-dom"

export const CountryItem = ({country}) => {
  function formatearNumero(numero) {
    // Convertir el número a una cadena y dividirlo en grupos de 3 cifras desde la derecha
    const numeroFormateado = numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numeroFormateado;
  }
  const population = formatearNumero(country.population)
  return (
    <Link to={`country/${country.name}`}>
      <div className="cursor-pointer dark:bg-cardDark bg-lightCard text-lightText dark:text-darkText rounded-md shadow-md shadow-slate-300 dark:shadow-slate-800">
        <img src={country.flag} alt={country.name} className='w-72 h-44 rounded-t-md' />
        <div className="p-6 mb-5">
          <h4 className="text-lg font-bold mb-4">{country.name}</h4>
          <p className="text-slate-900 dark:text-slate-400"><span className="font-semibold text-black dark:text-white">Population:</span> {population}</p>
          <p className="text-slate-900 dark:text-slate-400"><span className="font-semibold text-black dark:text-white">Region:</span> {country.region}</p>
          <p className="text-slate-900 dark:text-slate-400"><span className="font-semibold text-black dark:text-white">Capital:</span> {country.capital}</p>
        </div>
      </div>   
    </Link>
  )
}
