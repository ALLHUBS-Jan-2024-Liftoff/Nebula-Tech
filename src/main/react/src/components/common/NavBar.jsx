import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PersonCircle, HeartFill, Headset, Search } from 'react-bootstrap-icons'
import itineraLogo from '../../assets/images/itinera-logo.jpg'
import "./NavBar.css";

function NavBar() {
    const [navPanel, setNavPanel] = useState(false);
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
    useEffect(() => {
        document.addEventListener('click', mainNavPanelClickOutside);
        return () => {
            document.removeEventListener('click', mainNavPanelClickOutside);
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
                <a href="#"><PersonCircle color="#212529" size={18}/>My Account</a>
                <a href="#"><HeartFill color="#212529" size={16}/>Wishlist</a>
                <Link to="/contact"><Headset color="#212529" size={18} /> Contact us</Link>
            </nav>
            <form>
                <input autoComplete="off" id="trip-search" name="query" placeholder="Search all trips"  />
                <button type="submit"><Search color="#212529" size={16}/></button>          
            </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default NavBar;
