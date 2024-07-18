import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import reactLogo from '../assets/react.svg'
import NavBar from '../components/common/NavBar'
import introLandingImg from '../assets/images/intro-landing.jpg'
import'./LandingPage.css'

function LandingPage() {
  const [count, setCount] = useState(0);
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