import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../components/common/NavBar'
import CommonFooter from '../components/common/CommonFooter'
import sicilyImg from '../assets/images/sicily.jpg'
import indiaImg from '../assets/images/india.jpg'
import mexicoImg from '../assets/images/mexico.jpg'
import alaskaImg from '../assets/images/alaska.jpg'
import Header from '../components/explore/Header'
import ExploreGrid from '../components/explore/ExploreGrid'
import ExploreDropdown from '../components/explore/ExploreDropdown.jsx'


function ExplorePage() {
  return (
  <>
    <NavBar />
    <main />
    <Header />
    <ExploreGrid />
    <main />
    <CommonFooter />
  </>
  );
}

export default ExplorePage;