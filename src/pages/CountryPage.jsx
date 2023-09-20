import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getNativeName } from '../helpers/getNativeName';
export const CountryPage = ({country}) => {
const {currencie, nativeName} = getNativeName(country.currencies, country.nativeName)

function formatearNumero(numero) {
  // Convertir el número a una cadena y dividirlo en grupos de 3 cifras desde la derecha
  const numeroFormateado = numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numeroFormateado;
}
const population = formatearNumero(country.population)

  return (
    <main className='pb-8'>
     <Link to='/'><span className='py-1 px-5 shadow-md shadow-slate-400 bg-white dark:bg-cardDark dark:shadow-slate-800 dark:text-darkText inline-flex gap-3 items-center m-7 mb-16 md:text-md md:py-2 md:px-6 md:rounded-md'><AiOutlineArrowLeft /> Back</span></Link>
     <div className='mx-6 flex flex-col sm:flex-row md:gap-24 '>
        <img src={country.flag} alt={country.name} className='flex-1' /> 
        <div className='md:flex-1 md:flex md:flex-col'>
            <h4 className='font-bold text-xl mt-8 mb-4 dark:text-darkText md:text-4xl md:my-10 md:self-center '>{country.name}</h4>
            <div className='md:flex md:gap-8 md:justify-center'>
              <div className='mb-10 md:flex md:flex-col md:gap-8 md:text-md'>
                  <p className='text-slate-600 dark:text-slate-400'><span className="font-semibold text-black dark:text-darkText">Native Name:</span> {nativeName}</p>
                  <p className='text-slate-600 dark:text-slate-400'><span className="font-semibold text-black dark:text-darkText">Region:</span> {country.region}</p>
                  <p className='text-slate-600 dark:text-slate-400'><span className="font-semibold text-black dark:text-darkText">Sub Region:</span> {country.subregion}</p>
                  <p className='text-slate-600 dark:text-slate-400'><span className="font-semibold text-black dark:text-darkText">Capital:</span> {country.capital.join(', ')}</p>
              </div>
              <div className='md:flex md:flex-col md:gap-8 md:text-md'>
                  <p className='text-slate-600 dark:text-slate-400'><span className="font-semibold text-black dark:text-darkText">Population:</span> {population}</p>
                  <p className='text-slate-600 dark:text-slate-400'><span className="font-semibold text-black dark:text-darkText">State:</span> {country.isIndependent ? 'Independent' : 'Not Independent'}</p>
                  <p className='text-slate-600 dark:text-slate-400'><span className="font-semibold text-black dark:text-darkText">Currencies:</span> {currencie}</p>
              </div>
            </div>
        </div>
     </div> 
    </main>
  )
}
