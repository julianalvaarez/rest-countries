import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NavBar } from "../components/NavBar"
import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext"
import { CountryPage } from "../pages/CountryPage"

export const RouterApp = () => {
  const {countries} = useContext(CountriesContext)
  return (
    <>
    <NavBar />
     <Routes>
        <Route path="/*" element={<HomePage/>} />
        {countries.map((country) => (
            <Route key={country.name} path={`country/${country.name}`} element={<CountryPage country={country} />} />
        ))}
     </Routes>   
    </>
  )
}
