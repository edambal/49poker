import React from 'react';
import '../App.css';

const Footer=()=>{
    return(
     
            <footer class="on-ftr">
            <div class="container">
                <div class="row">
                    <div class="col-md-3"><h5><span class="clr-2">Quick</span>Links</h5></div>
                    <div class="col-md-3"><h5><span class="clr-2">Extra</span>Links</h5></div>
                    <div class="col-md-3"><h5><span class="clr-2">Address</span>Area</h5></div>
                    <div class="col-md-3"><h5><span class="clr-2">Stay</span>Tuned</h5></div>
                </div>
                <div class="row ftr-desc">
                    <div class="col-md-3">
                        <dd>Home</dd>
                        <dd>About Us</dd>
                        <dd>Contact Us</dd>
                        <dd>Services</dd>
                    </div>
                    <div class="col-md-3">
                        <dd>Terms and Conditions</dd>
                        <dd>Privacy and Policy</dd>
                        <dd>Use of Terms</dd>
                    </div>
                    <div class="col-md-3">
                        <dd>Video provides a powerful way to help you prove your point. When you click</dd>
                        <dd>catchme@gmail.com</dd>
                        <dd>+91 888 888 8888</dd>
                    </div>
                    <div class="col-md-3">
                        
             <form class="form-inline">
           
              <div class="form-group mb-2">
    <input type="email" class="form-control" id="Email" placeholder="Your Email Address"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Subscribe our News Letter</button>
             
            </form>

                    </div>
                </div>
            </div>
            </footer>
    )
    

}
export default Footer;