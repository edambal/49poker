import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fafacebook, famicrosoft, fagoogle } from '@fortawesome/free-solid-svg-icons'

const Footer =() =>{
    return(
    <footer class="bg-dark text-white pt-3 pb-2">
        <div class="container text-center text-md-left">
            <div class="row text-center text-md-left">
                <div class="col-md-1 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
                    {/* <p>Though it cose him dear to give away his wholeharvest, the farmer felt wonderful after having done so. Yet he couldn't have dreamed what was waiting for him when he returm home empty-handed.
                    </p> */}

                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
                    {/* <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>The Providers</a>
                    </p>
                    <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>Creativity</a>
                    </p>
                    <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>SourceFiless</a>
                    </p>
                    <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>bootstrap</a>
                    </p>
                    <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>The Providers</a>
                    </p> */}
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                    {/* <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>Your Account</a>
                    </p>
                    <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>Become a Member</a>
                    </p>
                    <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>Shipping Rates</a>
                    </p>
                    <p>
                        <a href="#" class="text-white" style={{textDecoration:'none'}}>Help</a>
                    </p> */}
                    
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contacts</h5>
                    {/* <p>
                        <i class="fas fa-home mr-3"></i>New York, NY 2333, US
                    </p>
                    <p>
                        <i class="fas fa-envelope mr-3"></i>theProvider99@gmail.com
                    </p>
                    <p>
                        <i class="fas fa-phone mr-3"></i>+91 3122324232
                    </p>
                    <p>
                        <i class="fas fa-print mr-3"></i>+01 312 633 777
                    </p> */}
                </div>
                <hr class="mb-4"/>
                    <div class="row align-items-center">
                        <div class="col-md-7 col-lg-8">
                            <p>Copyright @2020 All rights reserved by:
                                <a href="#" style={{textDecoration:'none'}}>
                                    <strong class="text-warning">The Providers</strong>
                                </a>
                            </p>
                        </div>
                        <div class="col-md-5 col-lg-4">
                            <div class="text-center text-md-right">
                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item">
                                    <span class="fa-stack fa-lg">
                                      <i class="fa fa-square-o fa-stack-2x"></i>
                                      <i class="fa fa-twitter fa-stack-1x"></i>
                                    </span>
                                    </li>
                                    <li class="list-inline-item">
                                    <span class="fa-stack fa-lg">
                                      <i class="fa fa-square-o fa-stack-2x"></i>
                                      <i class="fa fa-facebook fa-stack-1x"></i>
                                    </span>
                                    </li >
                                    <li class="list-inline-item">
                                    <span class="fa-stack fa-lg">
                                      <i class="fa fa-square-o fa-stack-2x"></i>
                                      <i class="fa fa-linkedin fa-stack-1x"></i>
                                    </span>
                                    </li>
                                    <li class="list-inline-item">
                                    <span class="fa-stack fa-lg">
                                      <i class="fa fa-square-o fa-stack-2x"></i>
                                      <i class="fa fa-google fa-stack-1x"></i>
                                    </span>
                                    </li>
                                    {/* <li class="list-inline-item">
                                    <span class="fa-stack fa-lg">
  <i class="fa fa-square-o fa-stack-2x"></i>
  <i class="fa fa-map-marker fa-stack-1x"></i>
</span>
    </li> */}
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    </footer>
    )
}
export default Footer;