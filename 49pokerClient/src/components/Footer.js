import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Footer=()=>{
    return(
     
            <footer className="on-ftr bg-secondary pushfooter">
            <div className="container">
                <div className="row">
                    <Link className="col-md-3 text-dark font-weight-bold text-secondary" to="/tables">QuickLinks</Link>
                    <Link className="col-md-3 text-dark font-weight-bold text-secondary" to="/tables">ExtraLinks</Link>
                    <Link className="col-md-3 text-dark font-weight-bold text-secondary" to="/tables">AddressArea</Link>
                    <Link className="col-md-3 text-dark font-weight-bold text-secondary" to="/tables">StayTuned</Link>
                </div>
                <div className="row ftr-desc">
                    <div className="col-md-3">
                        <dd>Home</dd>
                        <dd>About Us</dd>
                        <dd>Contact Us</dd>
                        <dd>Services</dd>
                    </div>
                    <div className="col-md-3">
                        <dd>Terms and Conditions</dd>
                        <dd>Privacy and Policy</dd>
                        <dd>Use of Terms</dd>
                    </div>
                    <div className="col-md-3">
                        <dd>Play poker with Friends</dd>
                        <dd>pokerbrats@gmail.com</dd>
                        <dd>+1 650 393 4448</dd>
                    </div>
                    <div className="col-md-3">
                        
             <form className="form-inline">
           
              <div className="form-group mb-2">
    <input type="email" className="form-control" id="Email" placeholder="Your Email Address"/>
  </div>
  <button type="submit" className="btn btn-primary mb-2">Subscribe our News Letter</button>
             
            </form>

                </div>
                </div>
            </div>
            </footer>
    )
    

}
export default Footer;