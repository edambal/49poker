import React from 'react';
import {Button , Card} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBAlert } from 'mdbreact';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Table from '../components/Table';
import PokerModel from '../models/pokerData';
import './Home.css';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      image: '',
      chipcount: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log("Change values " ,target , value , name);

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Welcome ' + this.state.username + '. Press OK to continue to you favorite table');
    <MDBAlert color="success" >
        Welcome {this.state.username}. Please continue to your favorite table'
      </MDBAlert>
    event.preventDefault();
    // Lets Handle the input and send it over to db
    PokerModel.create(this.state)
      .then((data) => {
        console.log("The player id is " , data.player._id);
        // this.props.history.push('/tables');
        this.props.history.push({
            pathname: "/tables",
            state: { player: data.player }
        })
      })

  }

  render() {

    return (
      <>
      <Navbar />
      <MDBContainer className="profile-form"> 
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
              {/* <label>
                  Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label> */}
                <MDBInput name="username" name="username" label="username" icon="user" group type="text" validate error="wrong"
                  success="right" value={this.state.username} onChange={this.handleChange} />
                <MDBInput label="email" icon="envelope" group type="email" validate error="wrong"
                  success="right"/>
                <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                  error="wrong" success="right" />
                <MDBInput label="Your password" icon="lock" group type="password" validate 
                  error="wrong" success="right"/>
                <MDBInput name="image" label="Image Url" icon="image" group type="text" validate 
                  error="wrong" success="right" value={this.state.image} onChange={this.handleChange}/>
                <MDBInput name="chipcount" label="Chip Count" icon="dollar" group type="number" validate 
                  error="wrong" success="right" value={this.state.chipcount} onChange={this.handleChange}/>     
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

