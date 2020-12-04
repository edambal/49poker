import React from 'react';
import PokerModel from '../models/pokerData';
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

  deleteGame = (id) => {
    PokerModel.delete(id).then((data) => {
      this.setState((prevState) => {
        const updatedGames = prevState.games.filter((game) => game._id !== id);

        return { games: updatedGames };
      });
    });
  }

  renderGames() {
    return this.state.players.map((player) => {
      return (
        <div class="poker-table">
          <a href="#" class="btn btn-primary">Delete {player.username  }</a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="gameCardContainer">
          {this.renderGames()}
        </ul>
      </div>
    )
  }
}

export default Users;