import {AiOutlineSearch} from 'react-icons/ai';

export const SearchCountry = ({inputValue, setInputValue}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='py-4 mx-4 mb-8 flex-1'>
        <div className='relative'>
            <AiOutlineSearch className='absolute z-10 text-xl mt-4 lg:mt-5 ml-2 text-slate-300'/>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='bg-lightCard dark:bg-cardDark rounded-md w-full py-3 px-5 dark:text-white text-lightText dark:placeholder:text-slate-300 placeholder:text-slate-400 pl-10 mt-1 shadow-md shadow-slate-300 dark:shadow-slate-800 lg:h-14' placeholder='Search for a country...' />
        </div>
      </form>   
    </>
  )
}
