import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Sliders2Vertical, InfoCircle } from 'react-bootstrap-icons'
import "./TripDateSelect.css";

function TripDateSelect({ trip }) {
    const navigate = useNavigate();

    const handleDateSelect = (year, range, price) => {
        sessionStorage.setItem('itineraCheckout', JSON.stringify({ year, range, price, tripId: trip.tripId, title: trip.title }));
        navigate('/checkout');
    }

    return (
    <>
        <div className="trip-date-select-container">
            <div className="trip-date-select-header">
                <h2>Select trip date</h2>
                <button type="button"><Sliders2Vertical color="#191919" size={24} /><span>Filter</span></button>
            </div>
            <div className="trip-date-select-body">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <span>Date</span>
                            </th>
                            <th>
                                <span>Trip type<InfoCircle color="#191919" size={16} /></span>
                            </th>
                            <th>
                                <span>Price<InfoCircle color="#191919" size={16} /></span>
                            </th>
                        </tr>
                    </thead>
                    {
                    Object.keys(trip?.dates).map((year, index) => (
                        <React.Fragment key={index}>
                            <tbody>
                                <tr>
                                    <th colSpan="3">
                                        <span>{year}</span>
                                    </th>
                                </tr>
                                {trip?.dates[year].map((date, dateIndex) => (
                                    <tr onClick={() => handleDateSelect(year, date.date, date.price)} key={'date' + dateIndex}>
                                        <td>
                                            <div className='trip-date-select-input-row'>
                                                <div className="trip-date-select-circle"></div>
                                                <span><b>{date.date}</b></span>
                                            </div>
                                        </td>
                                        <td><span>{date.type}</span></td>
                                        <td><span>{'$' + (date.price / 100)}</span></td>
                                    </tr>
                                 ))}
                            </tbody>
                        </React.Fragment>
                    ))}
                </table>
            </div>
        </div>
    </>
  );
}

export default TripDateSelect;
