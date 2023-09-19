

export const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const  data  = await res.json();
  const countries = data.map((country) => ({
    name: country.name.common,
    capital: country.capital,
    region: country.region ,
    subregion: country.subregion ,
    population: country.population ,
    currencies: country.currencies ,
    flag: country.flags.png,
    nativeName: country.name.nativeName,
    isIndependent: country.independent,
  }));
  return countries;
};
