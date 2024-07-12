import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import DemoPage from './pages/DemoPage'
import './assets/styles/global.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
      path: "/demo",
      element: <DemoPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)