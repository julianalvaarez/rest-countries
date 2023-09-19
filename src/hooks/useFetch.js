import { useEffect, useState } from "react"
import { getCountries } from "../helpers/getCountries"

export function useFetch() {
    
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function getNewCountries() {
    const newCountries = await getCountries()
    setCountries(newCountries)
    setIsLoading(false)
  }

  useEffect(() => {
    getNewCountries()
  }, [])

  return {
    countries,
    isLoading
  }
  
}