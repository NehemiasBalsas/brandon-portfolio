import React from 'react'
import './Proyec.css'
import {Button, Link} from "@nextui-org/react";
import Image from "next/image";
import foto1 from "@/assets/img/foto1.png";
import foto2 from "@/assets/img/foto2.png";
import foto3 from "@/assets/img/foto3.png";

export default function Proyec() {
  return (
      <div className='contenedor_proyec'>
          
      <div className='title_div'>
         <h2 className='title_proyec'>Proyectos</h2>
      </div>
        <section className="carusel">
            <Image className='foto' src={foto1} alt="foto7" />
            <Image className='foto' src={foto2} alt="foto3" />
            <Image className='foto' src={foto3} alt="foto6" />
      </section>  
      <section className='info'>
        <div className='item_info'>
          <h2 className='subtitle'>Tienda_Shopix</h2>
          <p>eCommerce implementado con next js y API para obtener los productos,contiene informacion de los productos,carrito de compras,mercado pago integrado, un chat en tiempo real hecho con Socket.io .</p>
        </div>
        <div className='item_info'>
          <h2 className='subtitle'>Calculadora</h2>
          <p>Es una herramienta versátil. Con funciones de suma, resta, multiplicación y división, ofrece resultados precisos de manera rápida y eficiente.</p>
        </div>
        <div className='item_info'>
        <h2 className='subtitle'>Pokedex</h2>
          <p>Pokédex hecha en JS en la cual aparecen todos los Pokémones y tiene un buscador por nombre o por número de Pokédex. Además, muestra qué habilidad, altura y peso tiene el Pokémon.</p>
        </div>
      </section>
          
          <section className='buttons'>
            <Button className='soyBoton' color="danger" variant="bordered">
                <Link href='https://tienda-shopix-utn.vercel.app/'  target='_blank' >
                  <div className='Linkk'>Tienda_Shopix</div>
                </Link>
            </Button>
            <Button className='soyBoton' color="danger" variant="bordered">
                <Link href='https://calculadora-de-brandon.vercel.app/' target='_blank'>
                  <div className='Linkk'>Calculadora</div>
                </Link>
            </Button>
            <Button className='soyBoton' color="danger" variant="bordered">
                <Link href='https://pokedex-brandon-balsas.vercel.app/' target='_blank'>
                  <div className='Linkk'>Pokedex</div>
                </Link>
            </Button>
        </section>
        </div>
  )
}
