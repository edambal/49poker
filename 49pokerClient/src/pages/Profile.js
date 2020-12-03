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
                <MDBInput label="Image Url" icon="image" group type="text" validate />
                
              </div>
              <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>       
        </MDBContainer>
        <Footer />    
        
  </>
  
  
)

}

export default Profile;






// import React, { Component } from 'react';
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter, MDBIcon, MDBRow } from
// 'mdbreact';
// import '../index.css';
// import Navbar from '../components/Navbar';
// class Profile extends Component {
// state = {
// modal2: false
// }
// toggle = nr => () => {
// let modalNumber = 'modal' + nr
// this.setState({
// [modalNumber]: !this.state[modalNumber]
// });
// }
// render() {
// return (
//   <>
//     {/* <Navbar /> */}
//     <MDBContainer>
//         <MDBBtn rounded onClick={this.toggle(2)}>Launch Modal Login Form</MDBBtn>
//         <MDBModal
//         // {...this.props}
//         className="form-elegant" isOpen={this.state.modal2} toggle={this.toggle(2)}>
//         <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold my-3" toggle={this.toggle(2)}>Sign in</MDBModalHeader>
//         <MDBModalBody className="mx-3">
//         <form className=" mx-3 grey-text">
//         <MDBInput label="Your email" group type="email" validate />
//         <MDBInput label="Your password" group type="password" validate />
//         <p className="font-small orange-text text-right">Forgot password?</p>
//         </form>
//         </MDBModalBody>
//         <MDBModalFooter className="justify-content-center mx-4">
//         <MDBBtn block rounded gradient="peach" onClick={this.toggle(2)}>SIGN IN</MDBBtn>
//         <p className="font-small dark-grey-text my-4">or Sign in with:</p>
//         <MDBRow className="py-3">
//         <MDBBtn rounded color="white" className="mr-md -3">
//         <MDBIcon fab icon="facebook-f" className="text-center orange-text" />
//         </MDBBtn>
//         <MDBBtn rounded color="white" className="mr-md-3">
//         <MDBIcon fab icon="twitter" className="text-center orange-text" />
//         </MDBBtn>
//         <MDBBtn rounded color="white" className="mr-md-3">
//         <MDBIcon fab icon="google-plus-g" className="text-center orange-text" />
//         </MDBBtn>
//         </MDBRow>
//         <MDBRow className="mx-5 w-100 py-3 justify-content-end" style={{ borderTop: "1px solid #e9ecef" }}>
//         <p className="font-small grey-text">Not a member? <span className="orange-text ml-1"> Sign Up</span></p>
//         </MDBRow>
//         </MDBModalFooter>
//         </MDBModal>
//     </MDBContainer>
//   </>
// );
// }
// }
// export default Profile;

