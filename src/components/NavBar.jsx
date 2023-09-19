import { useEffect, useState } from 'react';
import {BsMoonFill, BsFillSunFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
export const NavBar = () => {
    const [theme, setTheme] = useState('light')

    function handleChangeTheme() {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
      if (theme === 'dark') {
        document.querySelector('html').classList.add('dark')
      }else {
        document.querySelector('html').classList.remove('dark')
      }
    }, [theme])
  return (
    <header>
      <nav className='dark:bg-cardDark shadow-md shadow-slate-300 dark:shadow-slate-800 bg-white'>
        <ul className='flex justify-between mx-3 p-2 text-lightText items-center py-6 dark:text-white'>
            <Link to='/'><li className='font-semibold'>Where in the world?</li></Link>
            <li onClick={handleChangeTheme} className='hidden dark:flex items-center gap-2'><BsMoonFill/> Dark Mode</li>
            <li onClick={handleChangeTheme} className='flex dark:hidden items-center gap-2'><BsFillSunFill/> Light Mode</li>
        </ul>
      </nav>
    </header>
  )
}
