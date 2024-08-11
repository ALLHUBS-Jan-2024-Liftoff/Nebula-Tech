import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../components/common/NavBar'
import CommonFooter from '../components/common/CommonFooter'
import DashboardNavCard from '../components/dashboard/DashboardNavCard'


function UserDashboard() {
  return (
  <>
    <NavBar />
    <main />
    <DashboardNavCard />
    <main />
    <CommonFooter />
  </>
  );
}

export default UserDashboard;