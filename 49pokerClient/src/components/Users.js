import React from 'react';
import PokerModel from '../models/pokerData;
import GameCard from '../components/GameCard';

class Users extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    // MAKE API CALL
    GameModel.all().then((data) => {
      console.log('data:', data);

      this.setState({ players: data.players });
    });
  }

  deleteGame = (id) => {
    GameModel.delete(id).then((data) => {
      this.setState((prevState) => {
        const updatedGames = prevState.games.filter((game) => game._id !== id);

        return { games: updatedGames };
      });
    });
  }

  renderGames() {
    return this.state.players.map((player) => {
      return (
        <GameCard 
          game={game} 
          deleteGame={this.deleteGame}
          key={game._id}
        />
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