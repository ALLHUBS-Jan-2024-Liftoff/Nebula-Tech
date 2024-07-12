import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './DemoPage.css'

function DemoPage() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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
      <Link to="/">Go to Landing Page</Link>
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
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
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