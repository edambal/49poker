import React from 'react';
import '../App.css'
import Navbar from '../components/Navbar';
import Rooms from '../components/Rooms';
import Footer from '../components/Footer'

const Home = (props) =>{
  return (
    <div >
     <Navbar />
     <div className="pushFooter">

     </div>
     <Footer />
  </div>  
  )
}

export default Home;