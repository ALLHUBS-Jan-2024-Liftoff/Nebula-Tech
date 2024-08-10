import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { X, Headset, Search, Journal } from 'react-bootstrap-icons'
import Spinner from 'react-bootstrap/Spinner'
import itineraLogo from '../../assets/images/itinera-logo.jpg'
import searchImg1 from '../../assets/images/search-img1.jpg'
import searchImg2 from '../../assets/images/search-img2.jpg'
import searchImg3 from '../../assets/images/search-img3.jpg'
import "./NavBar.css";

function NavBar() {
    const [navPanel, setNavPanel] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchImgs = [searchImg1, searchImg2, searchImg3];

    const handleButtonClick = (e) => {
        e.preventDefault();
        setNavPanel(!navPanel);
    }
    const mainNavPanelClickOutside = (event) => {
        if (event.target.className.includes("nav-main-link-trips")) {
            return
        }
        if (!event.target.closest('.nav-trips-submenu')) {
            setNavPanel(false);
        }
    }
    const searchPanelClickOutside = (event) => {
        if (event.target.id.includes("secondary-nav-trip-search")) {
            return
        }
        if (!event.target.closest('.secondary-nav-search-dropdown')) {
            setSearchTerm("");
        }
    }

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value.trim()) {
            setLoading(true);
            axios.get('/api/public/search-demo-trips?query=' + e.target.value.trim())
                .then(response => { setSearchResults(response.data); })
                .catch(error => { alert(JSON.stringify(error)); })
                .finally(() => { setLoading(false); });
        }
    };
    useEffect(() => {
        document.addEventListener('click', mainNavPanelClickOutside);
        document.addEventListener('click', searchPanelClickOutside);
        return () => {
            document.removeEventListener('click', mainNavPanelClickOutside);
            document.removeEventListener('click', searchPanelClickOutside);
        };
    }, []);

    

    return (
    <>
    <div className='position-relative'>
      <div className="nav-container">
        <a href="/" className='nav-itinera-logo-link'>
            <img src={itineraLogo} alt="itinera logo" /> 
        </a>
        <nav>
          <ul className='nav-main-link-ul'>
            <li className='nav-main-link-li'>
              <a href="#" onClick={handleButtonClick} className={`nav-main-link nav-main-link-trips ${navPanel ? 'active' : ''}`}>
                Trips
              </a>
              {navPanel ? (<div className="nav-trips-submenu">
                <ul className='nav-submenu-title-ul'>
                    <li>
                        <div className='nav-submenu-title'>Destinations</div>
                        <ul className='nav-submenu-items'>
                            <li>
                                <a href="/tours/europe/">Europe</a>
                            </li>
                            <li>
                                <a href="/tours/europe/greece">Greece</a>
                            </li>
                            <li>
                                <a href="/tours/europe/italy">Italy</a>
                            </li>
                            <li>
                                <a href="/tours/europe/ireland">Ireland</a>
                            </li>
                            <li>
                                <a href="/tours/europe/spain">Spain</a>
                            </li>
                            <li>
                                <a href="/tours/europe/germany">Germany</a>
                            </li>
                            <li>
                                <a href="/tours/europe/england">England</a>
                            </li>
                            <li>
                                <a href="/tours/europe/france">France</a>
                            </li>
                            <li>
                                <a href="/tours/asia/">Asia</a>
                            </li>
                            <li>
                                <a href="/tours/asia/japan">Japan</a>
                            </li>
                            <li>
                                <a href="/tours/latin-america/">Latin America</a>
                            </li>
                            <li>
                                <a href="/tours/middle-east/">Middle East</a>
                            </li>
                            <li>
                                <a href="/tours/africa/">Africa</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className='nav-submenu-title'>Popular trips</div>
                        <ul className='nav-submenu-items'>
                            <li>
                                <a href="/trips/the-greek-islands">The Greek Islands</a>
                            </li>
                            <li>
                                <a href="/trips/germany-italy-switzerland">
                                Germany, Italy &amp; Switzerland
                                </a>
                            </li>
                            <li>
                                <a href="/trips/costa-rica-adventure">
                                Costa Rica Adventure
                                </a>
                            </li>
                            <li>
                                <a href="/trips/thailand-getaway">Thailand Getaway</a>
                            </li>
                            <li>
                                <a href="/trips/ultimate-europe">Ultimate Europe</a>
                            </li>
                            <li>
                                <a href="/trips/highlights-of-japan">
                                Highlights of Japan
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className='nav-submenu-title'>Trips by length</div>
                        <ul className='nav-submenu-items'>
                            <li>
                                <a href="/explore?tripLengthTypes=sevenOrLess">
                                7 days or less
                                </a>
                            </li>
                            <li>
                                <a href="/explore?page=0&amp;tripLengthTypes=eightToTen">
                                8-10 days
                                </a>
                            </li>
                            <li>
                                <a href="/explore?page=0&amp;tripLengthTypes=elevenToFourteen">
                                11-14 days
                                </a>
                            </li>
                            <li>
                                <a href="/explore?page=0&amp;tripLengthTypes=fifteenToTwentyFive">
                                15-25 days
                                </a>
                            </li>
                            <li>
                                <a href="/explore?page=0&amp;tripLengthTypes=twentyFiveOrMore">
                                25 days or more
                                </a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </div>) : null}
            </li>
            <li className='nav-main-link-li'>
                <a href="/login" className='nav-main-link nav-main-link-login'>Login</a>
            </li>
            <li className='nav-main-link-li'>
                <Link to="/demo" className='nav-main-link'>Demo</Link>
            </li>
          </ul>
        </nav>
        <div className='secondary-nav-container'>
            <nav className='secondary-nav'>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#191919" height="16px">
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                    </svg>
                    Wishlist</a>
                <Link to="/contact"><Headset color="#212529" size={16} /> Contact us</Link>
                <Link to="/blog"><Journal color="#212529" size={14} /> Blog</Link>
            </nav>
            <form className='position-relative'>
                <input autoComplete="off" id="secondary-nav-trip-search" onChange={handleSearchInputChange} name="query" placeholder="Search all trips" value={searchTerm} />
                <button className="secondary-nav-submit-btn" type="submit" disabled>
                    {!loading ? <Search color="#212529" size={20}/> :
                        <Spinner animation="border" role="status" variant="dark" style={{ width: "24px", height: "24px" }}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                </button>
                {searchResults.length && searchTerm ? <div className='secondary-nav-search-dropdown'>
                    <button onClick={() => setSearchTerm('')} type="button">
                        Close&nbsp;<X color="#191919" size={26} />
                    </button>
                    <div className='secondary-nav-search-dropdown-title'>Our best sellers</div>
                    <ul>
                        {searchResults.map((trip, index) => {
                            return (
                                <li key={'trip-key' + trip.tripId}>
                                    <Link to={'/trip/' + trip.tripId} reloadDocument>
                                        <img src={searchImgs[index]} alt={'trip' + index} />
                                        <div>
                                            <h4>{trip.title}</h4>
                                            <p>{7 * (index + 1)} days</p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div> : null} 
            </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default NavBar;
