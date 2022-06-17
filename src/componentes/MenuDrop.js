import React from 'react';
import { Menu } from '@headlessui/react';
import { CaretDown } from 'phosphor-react';

export default function MenuDrop() {
  return (
    <Menu>
      <Menu.Button className='flex items-center'>
       <span><CaretDown size={28} /></span> Categorias
      </Menu.Button>
      <Menu.Items className='flex flex-col justify-around bg-zinc-800 h-[30rem] w-[20rem]'>
        <Menu.Item>
            <button
              className='hover:bg-[#f75400] text-white h-[3rem] flex items-center'
            >
              Ferramentas
            </button>
        </Menu.Item>
        <Menu.Item>
            <button
              className='hover:bg-[#f75400] text-white h-[3rem] flex items-center'
            >
              Eletrodomésticos
            </button>
        </Menu.Item>
        <Menu.Item>
            <button
              className='hover:bg-[#f75400] text-white h-[3rem] flex items-center'
            >
              Moda
            </button>
        </Menu.Item>
        <Menu.Item>
            <button
              className='hover:bg-[#f75400] text-white h-[3rem] flex items-center'
            >
              Informatica
            </button>
        </Menu.Item>
        <Menu.Item>
            <button
              className='hover:bg-[#f75400] text-white h-[3rem] flex items-center'
            >
              Esportes
            </button>
        </Menu.Item>
        <Menu.Item>
            <button
              className='hover:bg-[#f75400] text-white h-[3rem] flex items-center'
            >
              Acessorios para veículos
            </button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}