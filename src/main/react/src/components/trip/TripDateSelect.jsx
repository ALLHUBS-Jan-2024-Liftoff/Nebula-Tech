import { useState } from 'react'
import { Sliders2Vertical, InfoCircle } from 'react-bootstrap-icons'
import "./TripDateSelect.css";

function TripDateSelect() {
    const [selectedDate, setSelectedDate] = useState(null);
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
                    <tbody>
                        <tr>
                            <th colSpan="3">
                                <span>2024</span>
                            </th>
                        </tr>
                        <tr onClick={() => setSelectedDate(0)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 0 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>Nov 1 - Nov 21</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4629</span></td>
                        </tr>
                        <tr onClick={() => setSelectedDate(1)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 1 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>Nov 8 - Nov 28</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4229</span></td>
                        </tr>
                        <tr onClick={() => setSelectedDate(2)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 2 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>Dec 27 - Jan 16</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$6429</span></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th colSpan="3">
                                <span>2025</span>
                            </th>
                        </tr>
                        <tr onClick={() => setSelectedDate(3)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 3 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>May 9 - May 29</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4629</span></td>
                        </tr>
                        <tr onClick={() => setSelectedDate(4)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 4 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>May 23 - Jun 12</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4629</span></td>
                        </tr>
                        <tr onClick={() => setSelectedDate(5)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 5 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>Jun 27 - Jul 17</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4629</span></td>
                        </tr>
                        <tr onClick={() => setSelectedDate(6)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 6 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>Jul 18 - Aug 7</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4629</span></td>
                        </tr>
                        <tr onClick={() => setSelectedDate(7)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 7 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>Sep 12 - Oct 2</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4629</span></td>
                        </tr>
                        <tr onClick={() => setSelectedDate(8)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 8 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>Nov 7 - Nov 27</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4629</span></td>
                        </tr>
                        <tr onClick={() => setSelectedDate(9)}>
                            <td>
                                <div className='trip-date-select-input-row'>
                                    <div className={`trip-date-select-circle ${selectedDate === 9 ? 'tdc-selected' : ''}`}>
                                        <span></span>
                                    </div>
                                    <span><b>Dec 27 - Jan 16</b></span>
                                </div>
                            </td>
                            <td><span>Essential</span></td>
                            <td><span>$4629</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
}

export default TripDateSelect;
