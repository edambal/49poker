import React from 'react';
import '../App.css';

const Footer=()=>{
    return(
     
            <footer className="on-ftr bg-secondary pushfooter">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"><h5><span className="clr-2">Quick</span>Links</h5></div>
                    <div className="col-md-3"><h5><span className="clr-2">Extra</span>Links</h5></div>
                    <div className="col-md-3"><h5><span className="clr-2">Address</span>Area</h5></div>
                    <div className="col-md-3"><h5><span className="clr-2">Stay</span>Tuned</h5></div>
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
                        <dd>Video provides a powerful way to help you prove your point. When you click</dd>
                        <dd>catchme@gmail.com</dd>
                        <dd>+91 888 888 8888</dd>
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