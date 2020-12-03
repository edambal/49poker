import React from 'react';
import VD from '../images/VD.jpg';
import VK from '../images/VK.jpg';
import './Card.css';
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


const PokerCard=(props)=>{
  // console.log("PokerCARDs", props.cards.map(card=>{card}))
  
  console.log()
    return(
      <>
<CardDeck className="vd-deck">
  <Card className="card-avatar">
    <CardImg className="vd-img"  src={VD} style={{width:"100px",height:"100px", position: "relative",bottom: "500px",left: "200px"}} />
  </Card>
 <CardImg cards={props.cards}/>
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
export default PokerCard;