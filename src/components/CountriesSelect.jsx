import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext"

export const CountriesSelect = ({cambiarPagina}) => {
  const {filterForRegion} = useContext(CountriesContext)

  function handleChangeSelect(e) {
    cambiarPagina(1)
    filterForRegion(e.target.value)
  }

  return (
    <>
      <select onChange={handleChangeSelect} className="dark:bg-cardDark dark:text-slate-200 py-3 px-4 mx-4 mb-5 shadow-md dark:shadow-slate-800 shadow-slate-400 text-slate-800 rounded-lg font-semibold lg:h-14 lg:w-56">
        <optgroup>
            <option disabled selected value="">Filter by region</option>
            <option value="">All Countries</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
        </optgroup>
      </select>   
    </>
  )
}
