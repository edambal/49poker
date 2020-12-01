import React from 'react';
import './Home.css'
import Navbar from '../components/Navbar';
import Rooms from '../components/Rooms';
import Footer from '../components/Footer'

const Home = (props) =>{
  return (
    <div>
     <Navbar />
     <Rooms />
     <Footer />
  </div>  
  )
}

export default Home;