import React, { useState } from 'react'
import { close , logo, menu} from '../assets';
import { navLinks} from '../constants'
const Navbar = () => {
  const [toggle, SetToggle] = useState(false);
  return (
    <nav className=' items-center navbar w-full flex py-6 justify-between'>
      <img src={logo} alt=""className='w-[124px] h-[32px]'/>
      <ul className='gap-3 flex-1 list-none sm:flex hidden justify-end items-center'>
        {navLinks.map((nav,index)=>(
          <li
          key={nav.id} className={'font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white'}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img onClick={()=>SetToggle((prev)=>
        !prev)} src={toggle?close:menu} alt="menu" className=" object-contain w-[28px] h-[28px] " />
      

      <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >  <ul className='gap-3 flex-1 list-none flex flex-col justify-end items-center'>
        {navLinks.map((nav,index)=>(
          <li
          key={nav.id} className={'font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white'}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>      
      </div>
      </div>
    </nav>
  )
}

export default Navbar
