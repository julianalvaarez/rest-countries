import { useEffect, useState } from "react";

export const useFilterByName = (inputValue = '', countries = []) => {
    const [result, setResult] = useState([])

    useEffect(() => {
      if (inputValue.length === 0) {
        setResult(countries);
      } else {
        setResult(countries.filter((country) => country.name.toLowerCase().includes(inputValue)));
      }
    }, [countries, inputValue]);

    return result
}
