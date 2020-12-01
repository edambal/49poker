import React from 'react';
import {Link} from 'react-router-dom';

const Rooms = (props) =>{
  return(
  <div className="list-group">
    <Link to="/rooms" className="list-group-item list-group-item-action">Royals</Link>
    <Link to="/rooms" className="list-group-item list-group-item-action">Sunrises</Link>
    <a href="#" className="list-group-item list-group-item-action list-group-item-primary">Knightriders</a>
    <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Superkings</a>
    <a href="#" className="list-group-item list-group-item-action list-group-item-success">Daredevils</a>
    <a href="#" className="list-group-item list-group-item-action list-group-item-danger">RoyalChallengers</a>
    <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Kings X1</a>
  </div>
  )
  
}

export default Rooms;
