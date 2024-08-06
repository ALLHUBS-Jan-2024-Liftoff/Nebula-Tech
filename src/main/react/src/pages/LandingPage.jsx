// import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/common/NavBar'
import LandingSearchForm from '../components/landing/LandingSearchForm'
import CommonFooter from '../components/common/CommonFooter'
import { PiggyBank, GlobeAmericas, ClockHistory, EmojiSunglasses, StarFill } from 'react-bootstrap-icons'
import introLandingImg from '../assets/images/intro-landing.jpg'
import sicilyImg from '../assets/images/sicily.jpg'
import indiaImg from '../assets/images/india.jpg'
import mexicoImg from '../assets/images/mexico.jpg'
import alaskaImg from '../assets/images/alaska.jpg'
import'./LandingPage.css'

function LandingPage() {
  // const [count, setCount] = useState(0);
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
            <LandingSearchForm />
          </div>
        </section>
        <section className='landing-zebra-section'>
          <div className='landing-zebra-row'>
            <div className='landing-zebra-container'>
              <div>
                <PiggyBank color="#000" size={80}/>
                <p><strong>easy payment plans</strong></p>
              </div>
              <div>
                <GlobeAmericas color="#000" size={65}/>
                <p><strong>over 120 trips</strong></p>
              </div>
              <div>
                <ClockHistory color="#000" size={65}/>
                <p><strong>24/7 support</strong></p>
              </div>
              <div>
                <EmojiSunglasses color="#000" size={65}/>
                <p><strong>rockstar tour directors</strong></p>
              </div>
            </div>
          </div>
        </section>
        <section className='landing-new-trips-section'>
          <div className='landing-new-trips-container'>
            <h2>New trips</h2>
            <div className='landing-new-trips-row'>
              <Link to="/trip/sicily" className='landing-new-trips-col'>
                <div className='landing-new-trips-img'>
                  <img src={sicilyImg} alt="sicily" />
                </div>
                <div className='landing-new-trips-caption'>
                  <h3>Sicily & Malta Getaway</h3>
                  <p>10 days, 3 cities</p>
                </div>
              </Link>
              <Link to="/trip/india" className='landing-new-trips-col'>
                <div className='landing-new-trips-img'>
                  <img src={indiaImg} alt="india" />
                </div>
                <div className='landing-new-trips-caption'>
                  <h3>Holi in India: The Golden Triangle</h3>
                  <p>9 days, 4 cities</p>
                </div>
              </Link>
              <Link to="/trip/mexico" className='landing-new-trips-col'>
                <div className='landing-new-trips-img'>
                  <img src={mexicoImg} alt="mexico" />
                </div>
                <div className='landing-new-trips-caption'>
                  <h3>Mexico City: Day of the Dead</h3>
                  <p>7 days, 1 city</p>
                </div>
              </Link>
              <Link to="/trip/alaska" className='landing-new-trips-col'>
                <div className='landing-new-trips-img'>
                  <img src={alaskaImg} alt="alaska" />
                </div>
                <div className='landing-new-trips-caption'>
                  <h3>Hemisphere Hopper: Alaska to Argentina</h3>
                  <p>60 days, 29 cities</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className='landing-reviews-section'>
          <div className='landing-reviews-container'>
            <div className='landing-reviews-stars'>
              <StarFill color="#ef5d41" size={26}/>
              <StarFill color="#ef5d41" size={26}/>
              <StarFill color="#ef5d41" size={26}/>
              <StarFill color="#ef5d41" size={26}/>
              <StarFill color="#ef5d41" size={26}/>
            </div>
            <h5>12,000+ reviews</h5>
            <p className='landing-reviews-comment'>"An amazing trip, from the views and the food to the wonderful people I met on the trip. Everything was thought out so well that I didn't spend any of my time stressing like I would have if I had gone by myself!"</p>
            <p className='landing-reviews-author'><em><strong>—Michelle D., traveled to Germany, Italy & Switzerland</strong></em></p>
            <Link to="/explore">See all the trips</Link>
          </div>
        </section>
      </main>
      <CommonFooter/>
    </>
  )
}

export default LandingPage