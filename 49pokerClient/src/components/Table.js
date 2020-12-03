import React from 'react';
import {Button,ButtonGroup, CardImg} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import Playercard from './Playercard';
import pokertable from '../images/custompoker.jpg';
import './Table.css'
import Navbar from './Navbar';
import Footer from './Footer';

const Table = () =>{
    return(
      <div>
      <Navbar />
      <div class="col-md-20 col-md-push-40 offset-md-1 poker-table">
      <CardImg src={pokertable} title='Poker Table' />
      </div>
     
      <ButtonGroup aria-label="Basic example" className="control-buttons">
      <Button variant="success">CALL</Button>
      <Button variant="warning">FOLD</Button>
      <Button variant="primary">CHECK</Button>
      </ButtonGroup>
      <InputGroup className="mb-3 raise-amount">
      <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl aria-label="Amount (to the nearest dollar)" />
      <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup.Append>
      </InputGroup>
      <div className="card-player-dis">
          <Playercard />
      </div>
      
  </div>
    )
}
export default Table;