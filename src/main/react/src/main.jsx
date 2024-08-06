import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import DemoPage from './pages/DemoPage'
import ContactPage from './pages/ContactPage'
import Blog from './components/blog/Blog'
import TripDetailsPage from './pages/TripDetailsPage'
import CheckoutPage from './pages/CheckoutPage'
import CheckoutSuccessPage from './pages/CheckoutSuccessPage'
import RegisterForm from "./pages/RegisterForm.jsx"
import LoginForm from "./pages/LoginForm.jsx"
import ExplorePage from "./pages/ExplorePage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
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
  {
    path: "/contact",
    element: <ContactPage/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/trip/:id",
    element: <TripDetailsPage/>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>,
  },
  {
    path: "/checkout/success",
    element: <CheckoutSuccessPage/>,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)