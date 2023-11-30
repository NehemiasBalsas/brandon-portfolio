import React from 'react'
import Image from 'next/image'
import './Skills.css'
import typescript from '@/assets/img/typescript.png'
import reactJS from '@/assets/img/atomo.png'
import next from '@/assets/img/next.png'
import jest from '@/assets/img/jest.png'
import java  from '@/assets/img/java.png'
import sql from '@/assets/img/servidor-sql.png'
import tailwindd from '@/assets/img/tailwind.png'
import bootstrap from '@/assets/img/bootstrap.png'
import git from '@/assets/img/git.png'


export default function Skills() {
  return (
    <section className='contenedorSkills'>

      <h2 className='title_skill'>Habilidades</h2>

      <article className='skill_grid'>
        <div className='skill_group'>
        <Image className='imagenH' src={ typescript } alt={ 'foto no disponible' }/>
        </div>        
        <div className='skill_group'>
        <Image className='imagenH' src={ reactJS } alt={ 'foto no disponible' }/>
        </div>        
        <div className='skill_group'>
        <Image className='imagenH' src={ next } alt={ 'foto no disponible' }/>
        </div>        
        <div className='skill_group'>
        <Image className='imagenH' src={jest} alt={ 'foto no disponible' }/>
        </div>        
        <div className='skill_group'>
        <Image className='imagenH' src={java} alt={ 'foto no disponible' }/>
        </div>        
        <div className='skill_group'>
        <Image className='imagenH' src={sql} alt={ 'foto no disponible' }/>
        </div>        
        <div className='skill_group'>
        <Image className='imagenH' src={tailwindd} alt={ 'foto no disponible' }/>
        </div>        
        <div className='skill_group'>
        <Image className='imagenH' src={bootstrap} alt={ 'foto no disponible' }/>
        </div>        
        <div className='skill_group'>
        <Image className='imagenH' src={git} alt={ 'foto no disponible' }/>
        </div>        
      </article>
    </section>
  )
}
