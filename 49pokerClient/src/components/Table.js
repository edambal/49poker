import React from 'react';
import {Button,ButtonGroup, CardImg} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBAlert } from 'mdbreact';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import Playercard from './Playercard';
import PokerModel from '../models/pokerData';
import pokertable from '../images/custompoker.jpg';
import axios from 'axios';
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
        // alert('A chipcount update was submitted: ' + this.props.location.state.player.chipcount);
        alert(this.props.location.state.player.username + ' raised the bet to : ' + this.state.chipcount);

        event.preventDefault();
        // Lets Handle the input and send it over to db

        // PokerModel.create(this.state)
        //   .then((data) => {
        //     console.log("The player id is " , data.player._id);
        //     this.props.history.push('/tables')
        //   })
    
      }

      decideWinner(){
          // Handle the winner logic

            axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => {
        const deckId = res.data.deck_id;
        console.log("Cards Drawn in Table is " , deckId);
        axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=9`)
        .then(res =>{
          //   const deck = res.data
          let cardDeck = res.data.cards;
          let vkcard=cardDeck.slice(0,2);
          let vdcard=cardDeck.slice(2,4);
          let dealer=cardDeck.slice(4,9);
          console.log("vijay's cards ",vdcard);
          
          // call api to decide the winner
            axios.get(`https://api.pokerapi.dev/v1/winner/texas_holdem?cc=AC,KD,QH,JS,7C&pc[]=10S,8C&pc[]=3S,2C&pc[]=QS,JH`)
            .then(res =>{
                console.log("Winning Cards " , res.data.winners.map(winner=> winner.cards));
                console.log("Winning Hand " , res.data.winners.map(winner=> winner.hand));
                console.log("Winning Result " , res.data.winners.map(winner=> winner.result)); 

            })
        })
      })

          return(
            <MDBAlert >
              Ya whatever man
            </MDBAlert>
          )
          
        //   event.preventDefault();
          

      }

      render() {
        console.log("card deck " , this.props.cardDeck);
        return (
          <>
            <div>
            <Navbar />
                <div class="col-md-20 col-md-push-40 offset-md-1 poker-table">
                <CardImg src={pokertable} title='Poker Table' />
                </div>
                    <ButtonGroup aria-label="Basic example" className="control-buttons">
                    <form>
                        <Button variant="success">CALL</Button>
                        <Button variant="warning">FOLD</Button>
                        <Button type="submit" onClick={this.decideWinner()} group variant="primary">CHECK</Button>
                    </form>
                        
                                      
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