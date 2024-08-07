import Modal from 'react-bootstrap/Modal';
import MountainsImg from '../../assets/images/pexels-marek-piwnicki-3907296-25067987.jpg'
import SydneyImg from '../../assets/images/pexels-ricky-rijan-1680249.jpg'
import LandImg from '../../assets/images/pexels-larry-snickers-906925-3071758.jpg'
import CityImg from '../../assets/images/pexels-mastercowley-2440856.jpg'

function TourHeroImgModal(props) {
  return (
    <>
      <Modal {...props} fullscreen={true} onHide={props.onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.modaltype === '1' ? 'Marek Piwnicki' : null}
            {props.modaltype === '2' ? 'Ricky Rijan' : null}
            {props.modaltype === '3' ? 'Larry Snickers' : null}
            {props.modaltype === '4' ? 'Master Cowley' : null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='tour-hero-modal-img-wrapper'>
                {props.modaltype === '1' ? <img src={MountainsImg} className='tour-hero-modal-img--horizontal' /> : null}
                {props.modaltype === '2' ? <img src={SydneyImg} className='tour-hero-modal-img--vertical' /> : null}
                {props.modaltype === '3' ? <img src={LandImg} className='tour-hero-modal-img--vertical' /> : null}
                {props.modaltype === '4' ? <img src={CityImg} className='tour-hero-modal-img--vertical' /> : null}
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TourHeroImgModal;