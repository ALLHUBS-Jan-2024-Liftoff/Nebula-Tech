import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { StarFill, Heart, HeartFill } from 'react-bootstrap-icons'
import axios from 'axios';
import TourHeroModal from './TourHeroModal'
import TourHeroImgModal from './TourHeroImgModal'
import MountainsImg from '../../assets/images/australia-mountains.jpg'
import SydneyImg from '../../assets/images/sydney.jpg'
import LandImg from '../../assets/images/australia-land.jpg'
import CityImg from '../../assets/images/australia-city.jpg'
import'./TourHero.css'

function TourHero({ trip }) {
    const [modalShow, setModalShow] = useState(false);
    const [modalType, setModalType] = useState("");
    const [modalImgShow, setModalImgShow] = useState(false);
    const [modalImgType, setModalImgType] = useState("");
    const [inWishlist, setInWishlist] = useState(false);
    const openTripHeroModal = (modalType) => {
        setModalShow(true);
        setModalType(modalType);
    }
    const openTripHeroImgModal = (modalType) => {
        setModalImgShow(true);
        setModalImgType(modalType);
    }
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const top = document.getElementById(id).offsetTop - 70;
        window.scrollTo({ top, behavior: 'smooth' });
    }
    useEffect(() => {
        // Check if the trip is already in the wishlist
        const checkWishlist = async () => {
            const response = await axios.get(`/api/public/user`);
            const user = response.data;
            setInWishlist(user.wishlist.some(wishlistTrip => wishlistTrip.tripId === trip.tripId));
        };
        checkWishlist();
    }, [trip.tripId]);

    const toggleWishlist = async () => {
        try {
            const url = inWishlist ? '/api/public/wishlist/remove' : '/api/public/wishlist/add';
            const payload = { tripId: trip.tripId };
            await axios.post(url, payload);
            setInWishlist(!inWishlist);
        } catch (error) {
            console.error('Error updating wishlist:', error);
        }
    };
  return (
    <>
        <section className='tour-hero-section'>
            <div className='tour-hero-container'>
                <nav className='tour-hero-breadcrumb-nav'>
                    <ol>
                        <li>
                            <Link to="/">Home</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="12" stroke="#191919" fill="#191919">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </li>
                        <li>
                            <span>{trip?.title}</span>
                        </li>
                    </ol>
                </nav>

                <div className='tour-hero-collage'>
                    <div className='tour-hero-collage-media1'>
                        <button onClick={() => openTripHeroImgModal('1')}  type='button'>
                            <img src={MountainsImg} alt="mountains" />
                        </button>
                    </div>
                    <div className='tour-hero-collage-media2'>
                        <button onClick={() => openTripHeroImgModal('2')} type='button'>
                            <img src={SydneyImg} alt="sydney" />
                        </button>
                    </div>
                    <div className='tour-hero-collage-media3'>
                        <button onClick={() => openTripHeroImgModal('3')} type='button'>
                            <img src={LandImg} alt="land" /> 
                        </button>
                    </div>
                    <div className='tour-hero-collage-media4'>
                        <button onClick={() => openTripHeroImgModal('4')} type='button'>
                            <img src={CityImg} alt="city" /> 
                        </button>
                        <button className='tour-hero-see-all' type='button'>See all (17)</button>
                    </div>
                    <div className='tour-hero-collage-content'>
                        <h1>{trip?.title}</h1>
                        <p className="tour-hero-collage-content-subtitle">21 days,&nbsp;9 cities&nbsp;&nbsp;|&nbsp;&nbsp;From $5,029 before flights&nbsp;&nbsp;|&nbsp;&nbsp;Payments as low as&nbsp;$186.26</p>
                        <div className='tour-hero-collage-content-row'>
                            <div className='tour-hero-summary-info'>
                                <span>Trip type</span>
                                <button onClick={() => openTripHeroModal('essential')} type='button'>Essential</button>
                            </div>
                            <div className='tour-hero-summary-info'>
                                <span>Reviews</span>
                                <div className='tour-hero-summary-info-review'>
                                    <div className='tour-hero-summary-info-stars'>
                                        <StarFill color="#191919" size={14} />
                                        <StarFill color="#191919" size={14} />
                                        <StarFill color="#191919" size={14} />
                                        <StarFill color="#191919" size={14} />
                                        <StarFill color="#191919" size={14} />
                                    </div>
                                    <button onClick={(e) => scrollToSection(e, 'm-trip-reviews-section')} type='button'>83</button>
                                </div>
                            </div>
                            <div className='tour-hero-summary-info'>
                                <span>Activity level</span>
                                <div className='tour-hero-summary-info-activity'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="16">
                                        <path d="M416 0C352.3 0 256 32 256 32l0 128c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32l0 128s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64z"/>
                                    </svg>
                                    <button onClick={() => openTripHeroModal('activity-level')} type='button'>Moderate</button>
                                </div>
                            </div>
                            <a href="#" onClick={(e) => scrollToSection(e, 'tour-overview-section')} className='tour-hero-see-dates'>See dates & prices</a>
                            <div className='tour-hero-circle-btns'>
                                <button type='button' onClick={toggleWishlist}>
                                    {inWishlist ? <HeartFill color="red" size={20}/> : <Heart size={20}/>}
                                </button>

                                <button type='button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#191919"
                                         height="20px">
                                        <path
                                            d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TourHeroModal show={modalShow} onHide={() => setModalShow(false)} modaltype={modalType} />
            <TourHeroImgModal show={modalImgShow} onHide={() => setModalImgShow(false)} modaltype={modalImgType} />
        </section>
    </>
  )
}

export default TourHero