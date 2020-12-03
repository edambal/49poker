import React from 'react';
import {Link} from 'react-router-dom';

const Rooms = (props) =>{
  return(
  <div className="list-group">
    <Link to="/rooms" className="list-group-item list-group-item-action">Royals</Link>
    <Link to="/rooms" className="list-group-item list-group-item-action">Sunrises</Link>
  </div>
  )
  
}

export default Rooms;
