// import { useState, useEffect } from 'react'
import TripDateSelect from './TripDateSelect'
import "./TourOverview.css";

function TourOverview() {
    return (
    <>
        <div className="tour-overview-container">
            <section id="tour-overview-section">
                <h2>Why go?</h2>
                <p>There's only one word that can describe this trip, so we stuck it in the name. This is mountaintops and coral reefs and cityscapes. It's surfing and koalas and rainforests and didgeridoos and geysers. This is so much more than just a g'day, mate—this is nonstop adventure Down Under.</p>
                <div className='tour-overview-row'>
                    <div className='tour-overview-col'>
                        <h3>What you'll get</h3>
                        <ul>
                            <li>
                                Round-trip flights & airport transfers (or book 'em yourself)
                            </li>
                            <li>
                                18 nights in handpicked accommodations
                            </li>
                            <li>
                                18 breakfasts
                            </li>
                            <li>
                                3 dinners including a Hangi feast
                            </li>
                            <li>
                                Expert Tour Director
                            </li>
                            <li>
                                24/7 support from our travel gurus
                            </li>
                            <li>
                                4 insider city tours
                            </li>
                            <li>
                                Sydney Harbor cruise
                            </li>
                            <li>
                                Admission to Great Barrier Reef Observatory
                            </li>
                            <li>
                                Entrance and tour through Mossman Gorge
                            </li>
                            <li>
                                Cable car ride to the top of Bob's Peak
                            </li>
                            <li>
                                Ferry ride into Milford Sound
                            </li>
                        </ul>
                    </div>
                    <div className='tour-overview-col'>
                        <h3>Picture yourself</h3>
                        <ul>
                            <li>
                                Hanging 10 on the waves of Bondi Beach
                            </li>
                            <li>
                                Cruising through Sydney Harbor, soaking up the sun
                            </li>
                            <li>
                                Summiting Bob's Peak for epic views of Queenstown
                            </li>
                            <li>
                                Snorkeling through the underwater world of the Great Barrier Reef
                            </li>
                            <li>
                                Sipping Sauvignon Blanc right where the grapes were grown
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <TripDateSelect />
        </div>
    </>
  );
}

export default TourOverview;
