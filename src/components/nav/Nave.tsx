import React from 'react'
import './nave.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import Image from 'next/image';
import icon from '@/assets/img/icon.png'


export default function Nave() {
  return (
    <div>
        <Navbar className='contenedor'>
      <NavbarBrand>

        <p className="font-bold text-inherit nombre">Brandon Balsas</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        <NavbarItem isActive>
          <Link href="#" className='titleNav'>
            Sobre mí
          </Link>
          </NavbarItem>
          <NavbarItem isActive>
          <Link href="#" aria-current="page" className='titleNav2'>
            Habilidades
          </Link>
        </NavbarItem>
          <NavbarItem isActive>
          <Link href="#" aria-current="page" className='titleNav2'>
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='titleNav' href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
       
            <Image className='b' src={ icon } alt='foto de la marca'/>
       
      </NavbarContent>
    </Navbar>
    </div>
  )
}
