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
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();
        // Lets Handle the input and send it over to db
        PokerModel.create(this.state)
          .then((data) => {
            console.log("The player id is " , data.player._id);
            this.props.history.push('/tables')
          })
    
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
                            <MDBBtn group type="submit" color="primary">RAISE</MDBBtn>
                        </form>
                    </ButtonGroup>
                    

                        
                        

                        {/* <div class="md-form input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text md-addon">$</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                            <div class="input-group-append">
                                <span class="input-group-text md-addon">.00</span>
                            </div>
                            <Button variant="danger">RAISE</Button>
                        </div> */}
                    
                    
                    {/* <InputGroup className="mb-3 raise-amount">
                    <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                    </InputGroup> */}
                {/* <div className="card-player-dis"> */}
                    <Playercard />
                {/* </div> */}
            
                </div>
          </>
        )
      }

}





// const Table = (props) =>{
//     return(
//       <div>
//       <Navbar />
//         <div class="col-md-20 col-md-push-40 offset-md-1 poker-table">
//         <CardImg src={pokertable} title='Poker Table' />
//         </div>
     
//             <ButtonGroup aria-label="Basic example" className="control-buttons">
//             <Button variant="success">CALL</Button>
//             <Button variant="warning">FOLD</Button>
//             <Button variant="primary">CHECK</Button>
//             </ButtonGroup>
//             <form onSubmit={this.handleSubmit}>
//                 <div class="md-form input-group mb-3">
//                 <Button variant="danger">RAISE</Button>
                
//                     <div class="input-group-prepend">
//                         <span class="input-group-text md-addon">$</span>
//                     </div>
//                     <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
//                     <div class="input-group-append">
//                         <span class="input-group-text md-addon">.00</span>
//                     </div>
//                 </div>
//             </form>
            
//             {/* <InputGroup className="mb-3 raise-amount">
//             <InputGroup.Prepend>
//             <InputGroup.Text>$</InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl aria-label="Amount (to the nearest dollar)" />
//             <InputGroup.Append>
//             <InputGroup.Text>.00</InputGroup.Text>
//             </InputGroup.Append>
//             </InputGroup> */}
//         {/* <div className="card-player-dis"> */}
//             <Playercard />
//         {/* </div> */}
      
//         </div>
//     )
// }
export default Table;