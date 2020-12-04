import React from 'react';
import PokerModel from '../models/pokerData';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './Table.css'


class Users extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    // MAKE API CALL
    PokerModel.all().then((data) => {
      console.log('data:', data);

      this.setState({ players: data.players });
    });
  }


  deletePlayer = (id) => {
    console.log("I am deleting " , id)
    PokerModel.delete(id).then((data) => {
      this.setState((prevState) => {
        const updatedPlayers = prevState.players.filter((player) => player._id !== id);

        return { players: updatedPlayers };
      });
    });
  }

  renderPlayers() {
    return this.state.players.map((player) => {
      return (

        <div class="poker-table">
            <MDBBtn onClick={this.deletePlayer(player._id)} group type="submit" color="primary">Delete {player.username }</MDBBtn>
        </div>
      );
    });
  }



  render() {
    return (
      <div>
        <ul className="gameCardContainer">
          {this.renderPlayers()}
        </ul>
      </div>
    )
  }
}

export default Users;