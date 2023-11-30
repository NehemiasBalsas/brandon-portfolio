import React from 'react'
import './Contacto.css'
import Image from 'next/image'
import instagram from '@/assets/img/instagram (2).png';
import linkedin from '@/assets/img/linkedin (3).png';
import email from '@/assets/img/email.png'
import Link from 'next/link';


export default function Contacto() {
  return (
      <div className='Contacto'>
          <div className='title_contacto2'>
          <h3 className='title_contacto'>Contacto</h3>
          </div>
          
          <section className='icon_contactos'>
              
            <Link className='divC' href={'https://www.instagram.com/nehemias.balsas/'} target='_blank'>
              <Image className='redes' src={ instagram } alt='foto no disponible' />
              <p>@nehemias.balsas</p>  
            </Link>
            <Link className='divC' href={'https://www.linkedin.com/in/brandon-nehemias-balsas-005a32206/'} target='_blank'>
              <Image className='redes' src={ linkedin } alt='foto no disponible' />
              <p>Brandon Nehemias Balsas</p>  
            </Link>
            <Link className='divC' href={'mailto:Brandonbalsas7@gmail.com'} target='_blank'>
              <Image className='redes' src={ email } alt='foto no disponible' />
              <p>brandonbalsas7@gmail.com</p>  
            </Link>
            
              
          </section>
    </div>
  )
}
