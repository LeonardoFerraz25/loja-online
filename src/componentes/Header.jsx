import React from 'react';
import logo from '../imagens/prologo-shopping.png';
import { MagnifyingGlass } from 'phosphor-react';
import CartPopOver from './CartPopOver';
import '../css/Header.css'

export default function Header () {
  return (
    <header className='bg-black h-[5rem] flex items-center justify-between pr-4'>
      <div>
        <img src={ logo } alt="logo" />
      </div>
      <form className='flex items-center  w-[50%]'>
        <input
          className='form-control mr-3'
          type="text"
          placeholder='Buscar por produtos, marcas e tudo que precisar...'
        />
        <button type="submit">
          <MagnifyingGlass size={32} className="text-white" />
        </button>
      </form>
      <div>
        <CartPopOver />
      </div>
    </header>
  );
}
