import React from 'react';
import Pokercard from './Pokercard';
import Playercard from './Playercard';
import pokertable from '../images/custompoker.jpg'
import './Table.css'
import Navbar from './Navbar';
import Footer from './Footer';

const Table = () =>{
    return(
        <div>
            <Navbar />
            <img src={pokertable} title='Poker Table' />
            <div className="card-player-dis">
                <Pokercard/>
                <Playercard/>
            </div>
            <Footer />
        </div>
    )
}
export default Table;