import Modal from 'react-bootstrap/Modal';
import { X } from 'react-bootstrap-icons';

function TourHeroModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-30w"
      className='tour-hero-modal'
      centered
    >
      <Modal.Body>
        <button onClick={props.onHide} type="button">Close&nbsp;<X color="#191919" size={26} /></button>
        {props.modaltype === 'essential' ? <h4>Essential</h4> : <h4>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="20">
            <path d="M416 0C352.3 0 256 32 256 32l0 128c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32l0 128s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64z"/>
          </svg>Moderate</h4>}
        {props.modaltype === 'essential' ? <p>The budget-friendliest way to explore the world. Bunk up with your travel BFFs in handpicked, shared accommodations with sweet common areas. Perfect for solo travelers and social butterflies.</p> :
         <p>Wear your fitness tracker and watch those steps pile up. This isn't anything you need to train for, but it's definitely an adventure.</p>}
      </Modal.Body>
    </Modal>
  );
}

export default TourHeroModal;