import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const CountriesContext = createContext();
export const CountriesContextProvider = (props) => {
  const { countries: data, isLoading } = useFetch("https://restcountries.com/v3.1/all");
  // Filtro por Confederacion
  const [filterRegion, setFilterRegion] = useState(null);
  function filterForRegion(confederacion) {
    setFilterRegion(confederacion);
  }

  const countries = filterRegion ? data.filter((country) => country.region === filterRegion) : data;

  return (
    <CountriesContext.Provider value={{isLoading, filterForRegion, countries}}>
      {props.children}
    </CountriesContext.Provider>
  );
};
