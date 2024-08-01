// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-bootstrap-icons'
import "./LandingSearchForm.css";

function LandingSearchForm() {
    return (
    <>
        <form className="landing-search-form">
            <span className="landing-search-form-group">
                <select id="landing-search-location" name="location">
                    <option defaultValue value="">Anywhere</option>
                    <option label="Europe"></option>
                    <option label="Turkey" disabled={true}></option>
                </select>
            </span>
            <div className="landing-search-date-row">
                <span className="landing-search-form-group">
                    <select id="landing-search-date" name="date">
                        <option defaultValue value="">Anytime</option>
                        <option label="July 2024" value="2024-07-03T00:00:00.000Z"></option>
                    </select>
                </span>
                <button type="submit"><ArrowRight color="#fff" size={24}/></button>
            </div>
            <Link to="/explore">View All Trips</Link>
        </form>
    </>
  );
}

export default LandingSearchForm;
