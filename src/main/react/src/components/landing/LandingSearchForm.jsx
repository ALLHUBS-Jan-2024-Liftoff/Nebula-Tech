import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import "./LandingSearchForm.css";

function LandingSearchForm() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSelectCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSelectDate = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCountry) {
      navigate("/trip/" + selectedCountry);
    } else {
      navigate("/explore?date=" + selectedDate);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="landing-search-form">
        <span className="landing-search-form-group">
          <select
            value={selectedCountry}
            onChange={handleSelectCountry}
            id="landing-search-location"
            name="location"
          >
            <option defaultValue value="">
              Anywhere
            </option>
            <option value="1">Australia</option>
            <option value="2">Italy</option>
            <option value="3">India</option>
            <option value="4">Mexico</option>
            <option value="5">Argentina</option>
            <option value="6">Japan</option>
          </select>
        </span>
        <div className="landing-search-date-row">
          <span className="landing-search-form-group">
            <select
              value={selectedDate}
              onChange={handleSelectDate}
              id="landing-search-date"
              name="date"
            >
              <option defaultValue value="">
                Anytime
              </option>
              <option value="2024-10-03T00:00:00.000Z">October 2024</option>
              <option value="2024-11-03T00:00:00.000Z">November 2024</option>
              <option value="2024-12-03T00:00:00.000Z">December 2024</option>
              <option value="2025-01-03T00:00:00.000Z">January 2025</option>
              <option value="2025-02-03T00:00:00.000Z">February 2025</option>
              <option value="2025-03-03T00:00:00.000Z">March 2025</option>
              <option value="2025-04-03T00:00:00.000Z">April 2025</option>
            </select>
          </span>
          <button type="submit">
            <ArrowRight color="#fff" size={24} />
          </button>
        </div>
        <Link to="/explore">View All Trips</Link>
      </form>
    </>
  );
}

export default LandingSearchForm;
