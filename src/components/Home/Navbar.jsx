import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiPokecog } from 'react-icons/gi';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Pokébola + Pokédex */}
        <div className="flex items-center gap-2">
          <GiPokecog className="text-red-600 w-8 h-8" />
          <span className="text-2xl font-bold text-red-600 tracking-wide">Pokédex</span>
        </div>
        {/* Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-800 font-semibold transition-colors duration-200 border-b-2 pb-1 ${
                isActive ? 'border-red-500 text-red-600' : 'border-transparent hover:text-red-600 hover:border-red-500'
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/pokedex"
            className={({ isActive }) =>
              `text-gray-800 font-semibold transition-colors duration-200 border-b-2 pb-1 ${
                isActive ? 'border-red-500 text-red-600' : 'border-transparent hover:text-red-600 hover:border-red-500'
              }`
            }
          >
            Pokédex
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-800 font-semibold transition-colors duration-200 border-b-2 pb-1 ${
                isActive ? 'border-red-500 text-red-600' : 'border-transparent hover:text-red-600 hover:border-red-500'
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
