import React from 'react';
import FAQ from './FAQ.jsx';
import FAQHeader from './FAQHeader.jsx';
import './FAQ.css';
import NavBar from '../components/common/NavBar.jsx'

const FAQPage = () => {
    return (
        <div>
            <NavBar/>
            <FAQHeader/>
                <div className="container mt-5">
                    <FAQ/>
                </div>
        </div>
    );
}

export default FAQPage;