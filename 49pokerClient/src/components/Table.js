import React from 'react';
import {Button,ButtonGroup, CardImg} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import Playercard from './Playercard';
import PokerModel from '../models/pokerData';
import pokertable from '../images/custompoker.jpg';
import './Table.css'
import Navbar from './Navbar';
import Footer from './Footer';

class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
        alert('A chipcount update was submitted: ' + this.props.location.state.player.chipcount);
        event.preventDefault();
        // Lets Handle the input and send it over to db

        // PokerModel.create(this.state)
        //   .then((data) => {
        //     console.log("The player id is " , data.player._id);
        //     this.props.history.push('/tables')
        //   })
    
      }

      render() {

        return (
          <>
            <div>
            <Navbar />
                <div class="col-md-20 col-md-push-40 offset-md-1 poker-table">
                <CardImg src={pokertable} title='Poker Table' />
                </div>
            
                    <ButtonGroup aria-label="Basic example" className="control-buttons">
                        <Button variant="success">CALL</Button>
                        <Button variant="warning">FOLD</Button>
                        <Button variant="primary">CHECK</Button>
                        <form onSubmit={this.handleSubmit}>
                            <MDBInput name="chipcount"  icon="dollar" group type="number" validate 
                            error="wrong" success="right" value={this.state.chipcount} onChange={this.handleChange}/>
                            <MDBBtn group type="submit" color="danger">RAISE</MDBBtn>
                        </form>
                    </ButtonGroup>
                    <Playercard />
                </div>
          </>
        )
      }

}

export default Table;