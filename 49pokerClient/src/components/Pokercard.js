import React from 'react';
import axios from 'axios';
import VD from '../images/VD.jpg';
import VK from '../images/VK.jpg';
import './Card.css';
import './Player.css';
import  {
  Card,
  CardDeck,
  CardBlock,
  CardFooter,
  CardImg,
  CardTitle,
  CardText,
} from 'react-bootstrap-card';
import chips from '../images/pokerchips.png';



export default class PokerCard extends React.Component {

  state = {
    cardDeck: []
  }

  componentDidMount() {
      console.log("componet mounting")
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => {
        const deckId = res.data.deck_id;
        console.log("card deck drwan with id",deckId);
        axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
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
            <CardImg className="vd-card-chips" src={onecard.image} />
            </>
          )
        })
    }

    render() {
      console.log("rendercall  ", this.state.cardDeck);
     return(
       <>
         <CardDeck className="vd-deck">
              <Card className="card-avatar">
                <CardImg className="vd-img"  src={VD} style={{width:"100px",height:"100px", position: "relative",bottom: "500px",left: "200px"}} />
              </Card>
              {this.renderCards()}
              <CardImg className="vd-card-chips" src={chips}/>
            </CardDeck>
            <CardDeck className="vk-deck">
              <Card className="card-avatar">
                <CardImg className="vk-img" src={VK} style={{width:"100px",height:"100px", position: "relative",bottom: "1370px",left: "1050px"}} />
                <CardImg className="vk-card-chips" src={chips}/>
              </Card>
            </CardDeck>

       </>
       
         
     )
 
    }



}


// const PokerCard=(props)=>{
//   // console.log("PokerCARDs", props.cards.map(card=>{card}))
//   console.log("In POkercard comp" , props.cards);
//   const renderCards = () => {
//     return props.cards.map((onecard) => {
//       return(
//           <>
//           <CardImg className="deck-img" src={onecard.image} />
//           </>
//         )
//       })
//   }
//     return(
//       <>

// <CardDeck className="vd-deck">
//   <Card className="card-avatar">
//     <CardImg className="vd-img"  src={VD} style={{width:"100px",height:"100px", position: "relative",bottom: "500px",left: "200px"}} />
//   </Card>
//  {renderCards()}
//   <CardImg className="vd-card-chips" src={chips}/>
// </CardDeck>
// <CardDeck className="vk-deck">
//   <Card className="card-avatar">
//     <CardImg className="vk-img" src={VK} style={{width:"100px",height:"100px", position: "relative",bottom: "1370px",left: "1050px"}} />
//     <CardImg className="vk-card-chips" src={chips}/>
//   </Card>
// </CardDeck>
// </>
//     )
// }
