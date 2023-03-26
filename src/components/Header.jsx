import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaList } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-black text-white h-16 w-full px-4 flex justify-center items-center'>
      <nav>
        <ul className='flex gap-9 font-semibold text-[30px]'>
          <li>
            <Link to='/'><FaHome/></Link>
          </li>
          <li>
            <Link to='/listado' ><FaList/></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header