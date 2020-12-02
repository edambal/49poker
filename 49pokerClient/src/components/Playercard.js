import React from 'react';
import './Player.css';
import axios from 'axios';

export default class Playercard extends React.Component {
    state = {
      cardDeck: []
    }
  
    componentDidMount() {
        console.log("componet mounting")
      axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => {
          const deckId = res.data.deck_id;
          console.log("card deck drwan with id",deckId);
          axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
          .then(res =>{
            //   const deck = res.data
              console.log("cards after shuffle" , res.data)
              this.setState({ cardDeck:res.data.cards });
          })
        })

      }

    renderCards = () => {
      return this.state.cardDeck.map((onecard) => {
        return(
            <>
            <img src={onecard.image} />
            </>
          )
        })
    }
    render() {
         console.log("rendercall  ", this.state.cardDeck);
        return(
          <>
            {this.renderCards()}
          </>
          
            
        )
    
    }
  }