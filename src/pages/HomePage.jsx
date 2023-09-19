import { useContext, useState } from "react";
import { CountriesList, SearchCountry, CountriesSelect } from "../components"
import { useFilterByName } from "../hooks/useFilterByName";
import { CountriesContext } from "../context/CountriesContext";
import { usePaginacion } from "../hooks/usePaginacion";
import { Paginacion } from "../components/Paginacion";

export const HomePage = () => {
  const [inputValue, setInputValue] = useState('')
  const {countries, isLoading} = useContext(CountriesContext)
  const result = useFilterByName(inputValue, countries)
  const {dataPaginada, cambiarPagina, paginaActual} = usePaginacion(result)

  return (
    <div>
      <div className="lg:flex lg:mx-28 lg:items-center lg:my-5">
        <SearchCountry inputValue={inputValue} setInputValue={setInputValue} />
        <CountriesSelect cambiarPagina={cambiarPagina} />
      </div>
      <CountriesList isLoading={isLoading} countries={dataPaginada} />
      <Paginacion cambiarPagina={cambiarPagina} paginaActual={paginaActual} />
    </div>
  )
}
