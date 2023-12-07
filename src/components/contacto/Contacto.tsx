import React from 'react'
import './Contacto.css'
import Image from 'next/image'
import instagram from '@/assets/img/instagram (2).png';
import linkedin from '@/assets/img/linkedin (3).png';
import email from '@/assets/img/email.png';
import phone from '@/assets/img/ring-phone.png';
import Link from 'next/link';


export default function Contacto() {
  return (
      <div className='Contacto'>
          <div className='title_contacto2'>
          <h3 className='title_contacto'>Contacto</h3>
          </div>
          
          <div className='contenedor_titleR'>
          <h6 className='RedessSo'>Redes Sociales</h6>
          </div>
        <section className='icon_contactos'>
              
            <Link className='divC' href={'https://www.instagram.com/nehemias.balsas/'} target='_blank'>
              <Image className='redes' src={ instagram } alt='foto no disponible' />
            </Link>
            <Link className='divC' href={'https://www.linkedin.com/in/brandon-nehemias-balsas-005a32206/'} target='_blank'>
              <Image className='redes' src={ linkedin } alt='foto no disponible' /> 
            </Link>
            <Link className='divC' href={'mailto:Brandonbalsas7@gmail.com'} target='_blank'>
              <Image className='redes' src={ email } alt='foto no disponible' />  
            </Link>  
      </section>
      
      <div className='contenedor_titleR'>
          <h6 className='RedessSo'>Telefono</h6>
      </div>
      <div className='telefono'>
      <Image className='phone' src={phone} alt='foto no disponible' />
        <p>223 698-7228</p>
      </div>
      
      <p className='MarcaAgua'>Creado por Brandon Balsas ©</p>
    </div>
  )
}
