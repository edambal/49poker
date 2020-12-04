import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/49pokerlog.png';
import '../App.css';

const Navbar = (props) =>{
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar bg-secondary text-primary font-weight-bold mx-auto">
          
          <Link className="navbar-brand" to="/"><img src={logo} className="rounded float-right" alt="..."></img></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto text-primary">
              <li className="nav-item dropdown px-5">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Rooms
                </a>
                <div className="dropdown-menu dropdown-primary " aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/rooms">Sunrisers<span className="sr-only">(current)</span></Link>
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/rooms">Royals<span className="sr-only">(current)</span></Link>
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/rooms">SuperKings<span className="sr-only">(current)</span></Link>
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/rooms">Challengers<span className="sr-only">(current)</span></Link>
                </div>
              </li>
              <li className="nav-item dropdown px-5">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Tables
                </a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/tables">CashKing</Link>
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/tables">SuperNova</Link>
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/tables">BrainBuster</Link>
                </div>
              </li>
              <li className="nav-item dropdown px-5">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Tournaments
                </a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/tournaments">fulltilt</Link>
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/tournaments">worlds best</Link>
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/tournaments">The Carnage</Link>
                </div>
              </li>
              <li className="nav-item px-5">
                {/* <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">create profile
                </a>
                <div className="dropdown-menu dropdown-primary " aria-labelledby="navbarDropdownMenuLink"> */}
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/profile">Create Profile<span className="sr-only">(current)</span></Link>
                  {/* <Link className="dropdown-item font-weight-bold text-primary" to="/rooms">Royals<span className="sr-only">(current)</span></Link>
                  <Link className="dropdown-item font-weight-bold text-primary" to="/rooms">SuperKings<span className="sr-only">(current)</span></Link>
                  <Link className="dropdown-item font-weight-bold text-primary" to="/rooms">Challengers<span className="sr-only">(current)</span></Link>
                </div> */}
              </li>
              <li className="nav-item px-5">
                {/* <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">create profile
                </a>
                <div className="dropdown-menu dropdown-primary " aria-labelledby="navbarDropdownMenuLink"> */}
                  <Link className="dropdown-item font-weight-bold text-secondary" to="/admin">Admin<span className="sr-only">(current)</span></Link>
                  {/* <Link className="dropdown-item font-weight-bold text-primary" to="/rooms">Royals<span className="sr-only">(current)</span></Link>
                  <Link className="dropdown-item font-weight-bold text-primary" to="/rooms">SuperKings<span className="sr-only">(current)</span></Link>
                  <Link className="dropdown-item font-weight-bold text-primary" to="/rooms">Challengers<span className="sr-only">(current)</span></Link>
                </div> */}
              </li>
            </ul>
          </div>
    </nav>
  )
}

export default Navbar;
