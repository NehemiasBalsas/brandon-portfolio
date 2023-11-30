import Contacto from '@/components/contacto/Contacto'
import Skills from '@/components/habilidades/Skills'
import Nave from '@/components/nav/Nave'
import Proyec from '@/components/proyectos/Proyec'
import Sobre from '@/components/sobre-mi/Sobre'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Nave />
      <Sobre />
      <Skills />
      <Proyec />
      <Contacto />
    </main>
  )
}
