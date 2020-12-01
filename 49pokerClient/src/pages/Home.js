import React from 'react';
import './Home.css'
import Navbar from '../components/Navbar';
import Rooms from '../components/Rooms';
import Footer from '../components/Footer'

const Home = (props) =>{
  return (
    <div>
     <Navbar />
     <div className="pushfooter">

     </div>
     <Footer />
  </div>  
  )
}

export default Home;