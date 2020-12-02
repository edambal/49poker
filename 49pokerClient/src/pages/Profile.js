import React from 'react';
import {Button , Card} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';


const Profile = (props) =>{
return (
  <>
      <Navbar />
      <Footer />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" />
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                  error="wrong" success="right" />
                <MDBInput label="Your password" icon="lock" group type="password" validate />
              </div>
              <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>       
        </MDBContainer>
        
        
  </>
  
  
)

}

export default Profile;

