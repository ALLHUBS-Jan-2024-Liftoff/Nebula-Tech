import { useState } from 'react'
import NavBar from '../components/common/NavBar'
import introLandingImg from '../assets/images/intro-landing.jpg'
import'./LandingPage.css'

function LandingPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className='intro-landing-section'>
          <div className='intro-landing-section-column'>
            <img src={introLandingImg} alt="itinera logo" /> 
          </div>
          <div className='intro-landing-section-column'>
            <h1>Epic trips. Zero stress.</h1>
          </div>
        </section>
      </main>
    </>
  )
}

export default LandingPage