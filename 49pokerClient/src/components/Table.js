import React from 'react';
import Pokercard from './Pokercard';
import Playercard from './Playercard';
import './Table.css'

const Table = () =>{
    return(
        <div>
            {/* <img src='https://svgshare.com/i/9YD.svg' title='Poker Table' /> */}
            <div className="card-player-dis">
                {/* <Pokercard/> */}
                <Playercard/>
            </div>
        </div>
    )
}
export default Table;