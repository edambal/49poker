import React from 'react';
import axios from 'axios';
import VD from '../images/VD.jpg';
import VK from '../images/VK.jpg';
import DE from '../images/dealer.jpg'
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
constructor(props){
  super(props);
  this.state = {
    cardDeck: [],
    playerVd:[],
    playerVk:[],
    dealer:[]
     }
    //  this.vdcard=[],
    //  this.vkcard=[]
}

  // componentDidMount() {
  //     console.log("componet mounting")
  //   axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  //     .then(res => {
  //       const deckId = res.data.deck_id;
  //       console.log("card deck drwan with id",deckId);
  //       axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
  //       .then(res =>{
  //         //   const deck = res.data
  //           console.log("cards after shuffle" , res.data)
  //           this.setState({ cardDeck:res.data.cards });
  //       })
  //     })

  //   }

    renderCards = (player) => {
      return player.map((onecard) => {
        return(
            <>
            <CardImg className="poker-cards" src={onecard.image} />
            </>
          )
        })
    }
    // renderPlayerCard=()=>{
     
    //   console.log("ksjfdkf", vdcard);
    //    this.setState({playerVd:vdcard})
    //    this.setState({playerVk:vkcard})
    // }

    render() {
      // console.log("props", this.props.cards)
      // console.log("rendercall  ", this.state.cardDeck);
      // console.log("CARDS", this.state.playerVk)
      
      // this.renderPlayerCard()
      let vkcard=this.props.cards.slice(0, 2);
      let vdcard=this.props.cards.slice(2, 4);
      let dealer= this.props.cards.slice(4,10)
   
      // for(let i=0; i<this.props.cards.length; i++){
      //   vdcard.push(this.props.cards[i])
      //   vkcard.push(this.props.cards[i+1])
      // }
      // console.log("VD", vdcard);
      // console.log("VK", vkcard);

     return(
       <>
         <CardDeck className="vd-deck">
              <Card className="card-avatar">
                <CardImg className="vd-img" src={VD} style={{width:"100px",height:"100px", position: "relative",bottom: "500px",left: "200px"}} />
              </Card>
              <div className="vd-cards">
              {this.renderCards(vdcard)}
              </div>
          
              {/* <CardImg className="vd-card-chips" src={chips}/> */}
            </CardDeck>
            <CardDeck className="vk-deck">
              <Card className="card-avatar">
                <CardImg className="vk-img " src={VK} style={{width:"100px",height:"100px", position: "relative",bottom: "1370px",left: "1050px"}} />
                {/* <CardImg className="vk-card-chips" src={chips}/> */}
              </Card>
              <div className="vk-cards">
              {this.renderCards(vkcard)}
              </div>
           
            </CardDeck>
            <CardDeck className="de-deck">
              <Card className="card-avatar">
                <CardImg className="de-img " src={DE} />
                {/* <CardImg className="vk-card-chips" src={chips}/> */}
              </Card>
              <div className="de-cards">
              {this.renderCards(dealer)}
              </div>
            
            </CardDeck>

       </>
       
         
     )
 
    }



}