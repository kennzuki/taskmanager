import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="p-6 flex items-center justify-between gap-4 bg-gradient-to-r from-cyan-400 to-blue-500">
      <h1 className="font-bold text-3xl"><Link to={"/"}>Product Store 🛒</Link></h1>
      <ul className="flex gap-4 place-items-center text-white">
      <Link className="" to='/create}'>
       <button><FaRegPlusSquare size={40} /></button>
      
      </Link>
      <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white text-2xl rounded-md hover:bg-blue-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors duration-300"
        >
          {isDarkMode ? <LuSun/> :<IoMoon/> }
        </button>
      </ul>
     
    </div>
  )
}

export default Navbar