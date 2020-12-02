import React from 'react';
import clintImg from '../images/clintEastWood.jpg';
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


const Pokercard=()=>{
    return(
      <>
<CardDeck>
  <Card>
    <CardImg variant="top" src={clintImg} style={{width:"100px",height:"100px", position: "relative",
    bottom: "500px",
    left: "200px"}} />
    <CardBlock>
      <CardTitle>Card title</CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </CardText>
    </CardBlock>
    <CardFooter>
      <small className="text-muted">Last updated 3 mins ago</small>
    </CardFooter>
  </Card>
</CardDeck>
</>
    )
}
export default Pokercard;