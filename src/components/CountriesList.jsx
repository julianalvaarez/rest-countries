import { CountryItem } from "./CountryItem";

export const CountriesList = ({countries, isLoading}) => {

  if (isLoading) return <span className="font-semibold text-center my-10 text-2xl text-white">Is Loading...</span>;
  if (countries.length === 0) return <span className="h-screen flex justify-center items-center text-white font-semibold text-2xl"><p className="p-4 bg-red-600 rounded-lg">Country not found...</p></span>
  return (
    <>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mx-5">
        {countries.map(country => (
            <CountryItem country={country} key={country.name} />
        ))}
      </div>
    </>
  )
};
