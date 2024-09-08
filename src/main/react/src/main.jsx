import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import Blog from './components/blog/Blog'
import TripDetailsPage from './pages/TripDetailsPage'
import CheckoutPage from './pages/CheckoutPage'
import CheckoutSuccessPage from './pages/CheckoutSuccessPage'
import RegisterForm from "./pages/RegisterForm.jsx"
import LoginForm from "./pages/LoginForm.jsx"
import ExplorePage from "./pages/ExplorePage.jsx"
import UserDashboard from "./pages/UserDashboard.jsx"
import WhatWeDoPage from "./pages/WhatWeDoPage.jsx"
import FAQPage from './pages/FAQPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/global.css'
import AdminLoginPage from "./pages/AdminLoginPage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import AdminUserEditPage from "./pages/AdminUserEditPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
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
      path: "/admin",
      element: <AdminLoginPage />,
  },
  {
      path: "/admin/dashboard",
      element: <AdminDashboardPage />,
  },
  {
      path: "/admin/users/:id",
      element: <AdminUserEditPage />,
  },

  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
      path: "/dashboard",
      element: <UserDashboard />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {  
    path: "/about",
    element: <WhatWeDoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)