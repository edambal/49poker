import React from 'react';
import {Button , Card} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';


// const Profile = (props) =>{
// return (
//   <>
//       <Navbar />
//       <MDBContainer>
//         <MDBRow>
//           <MDBCol md="6">
//             <form>
//               <p className="h5 text-center mb-4">Sign up</p>
//               <div className="grey-text">
//                 <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
//                   success="right" />
//                 <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
//                   success="right" />
//                 <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
//                   error="wrong" success="right" />
//                 <MDBInput label="Your password" icon="lock" group type="password" validate />
//                 <MDBInput label="Image Url" icon="image" group type="text" validate />
                
//               </div>
//               <div className="text-center">
//                 <MDBBtn color="primary">Register</MDBBtn>
//               </div>
//             </form>
//           </MDBCol>
//         </MDBRow>       
//         </MDBContainer>
//         <Footer />    
        
//   </>
  
  
// )

// }

// export default Profile;






class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     <label>
    //       Name:
    //       <input type="text" value={this.state.value} onChange={this.handleChange} />
    //     </label>
    //     <input type="submit" value="Submit" />
    //   </form>
    // );
    return (
      <>
      {/* <Navbar /> */}
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
              {/* <label>
                  Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label> */}
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" value={this.state.value} onChange={this.handleChange} />
                {/* <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                  error="wrong" success="right" />
                <MDBInput label="Your password" icon="lock" group type="password" validate />
                <MDBInput label="Image Url" icon="image" group type="text" validate /> */}
                
              </div>
              <div className="text-center">
                <MDBBtn group type="submit" color="primary">Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>       
        </MDBContainer>
        <Footer />   
      </>
    );
  }
}

export default Profile;

