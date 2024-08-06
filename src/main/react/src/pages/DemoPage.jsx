import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard2Back } from 'react-bootstrap-icons'
import ModalExample from '../components/common/ModalExample'
import Button from 'react-bootstrap/Button'
import './DemoPage.css'

function DemoPage() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [modalShow, setModalShow] = useState(false);

// on mount --> first api
  useEffect(() => {
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, description };

// second api
    fetch('/api/demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        alert(JSON.stringify(data))
      })
      .catch(error => console.error(error));
  };

  return (
      <>
      <Button variant="warning" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ModalExample
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <CreditCard2Back color="#89bc00" size={96} />
      <Link to="/">Landing Page</Link>
        <h1>DEMO PAGE</h1>
        <h2>This is demo GET</h2>
         {data && (
            <div>
              <p>Message: {data.message}</p>
              <p>Description: {data.description}</p>
            </div>
          )}
        <h2>This is demo POST</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
          <div>
      <a href="https://vitejs.dev" target="_blank">
      </a>
      <a href="https://react.dev" target="_blank">
      </a>
    </div>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  </>
)
}

export default DemoPage