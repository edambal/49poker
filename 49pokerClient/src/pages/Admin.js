import React from 'react';
import '../App.css'
import Navbar from '../components/Navbar';
import Users from '../components/Users';
import Footer from '../components/Footer'

const Admin = (props) =>{
  return (
    <div >
     <Navbar />
     <div className="pushFooter">
      <Users />
     </div>
     <Footer />
  </div>  
  )
}

export default Admin;