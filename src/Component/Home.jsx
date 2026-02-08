import React from 'react'
import './Home.css'
import img1 from '../assets/Rinku1.jpeg'

export default function Home() {

  return (
    <section className='homediv'>
      <div className='home-left'>
        <h2 className='greeting'>Hi It's Me</h2>

        <h1 className='name'>Tulachand Meher</h1>

        <h2 className='tagline'>And I'm a FullStack Java developer</h2>
      </div>

      <div className='home-right'>
        <img src={img1} alt="Tulachand Meher" />
      </div>
    </section>
  )
}
