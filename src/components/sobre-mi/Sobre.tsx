import React from 'react'
import Image from 'next/image'
import brandon from '@/assets/img/brandon (1).png'
import './sobre.css'
import Link from 'next/link'
import github from '@/assets/img/github (1).png'
import linkedin from '@/assets/img/linkedin (2).png'
import instagram from '@/assets/img/instagram (1).png'

export default function Sobre() {
  return (
    <div className='general'>
      
      <div className='conte_title'>
        <h2 className='title_sobre'>Sobre mí</h2>
      </div>

    <div className='fondo'>


        <section className='imagen'>
        <Image className='brandon' src={brandon} alt='foto sobre mi' />
        
        <div className='icons'>
        <Link href={'https://github.com/NehemiasBalsas'} target="_blank">
        <Image className='icono' src={github} alt='foto no disponible'/>
        </Link>
        <Link href={'https://www.linkedin.com/in/brandon-nehemias-balsas-005a32206/'} target="_blank">
        <Image className='icono' src={linkedin} alt='foto no disponible'/>
        </Link>
        <Link  href={'https://www.instagram.com/nehemias.balsas'} target="_blank">
        <Image className='icono' src={instagram} alt='foto no disponible'/>
        </Link>
        </div>
          </section>
          
          <section className='texto'>
        <p className='parrafo'>¡Hola! Me llamo Brandon Balsas,
          soy un programador jr.
          Me apasiona el mundo IT
          y disfruto enfrentando desafíos que amplíen mis habilidades.
                  <br />
                  <span className='span'>¡Disfruta navegando por mi página web!</span>
              </p>
          </section>
      </div>
      </div>
  )
}
