import React from 'react';
import './Home.css'
import Navbar from '../components/Navbar';
import Rooms from '../components/Rooms'

const Home = (props) =>{
  return (
    <div>
     <Navbar />
     <Rooms />
  </div>  
  )
}

export default Home;