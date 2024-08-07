import TravelerPhoto1Img from '../../assets/images/traveler1.jpg'
import TravelerPhoto2Img from '../../assets/images/traveler2.jpg'
import TravelerPhoto3Img from '../../assets/images/traveler3.jpg'
import TravelerPhoto4Img from '../../assets/images/traveler4.jpg'
import TravelerPhoto5Img from '../../assets/images/traveler5.jpg'
import TravelerPhoto6Img from '../../assets/images/traveler6.jpg'
import "./TravelerPhotos.css";

function TravelerPhotos() {
    return (
    <>
        <div className="tour-traveler-photos-container">
            <section id="tour-traveler-photos-section">
                <h2>Traveler photos</h2>
                <div className="tour-traveler-photos-grid">
                    <div className="tour-traveler-photos-grid-item tour-traveler-photos-grid-item--large">
                        <img src={TravelerPhoto1Img} alt="traveler-pic1"/>
                    </div>
                    <div className="tour-traveler-photos-grid-item"> 
                        <img src={TravelerPhoto2Img} alt="traveler-pic2"/>
                    </div>
                    <div className="tour-traveler-photos-grid-item"> 
                        <img src={TravelerPhoto3Img} alt="traveler-pic3"/>
                    </div>
                    <div className="tour-traveler-photos-grid-item"> 
                        <img src={TravelerPhoto4Img} alt="traveler-pic4"/>
                    </div>
                    <div className="tour-traveler-photos-grid-item"> 
                        <img src={TravelerPhoto5Img} alt="traveler-pic5"/>
                    </div>
                    <div className="tour-traveler-photos-grid-item"> 
                        <img src={TravelerPhoto6Img} alt="traveler-pic6"/>
                    </div>
                </div>
                <button type='button'>Load More</button>
            </section>
        </div>
    </>
  );
}

export default TravelerPhotos;
