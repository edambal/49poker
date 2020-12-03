import axios from 'axios';

const playerurl = `http://localhost:4000/api/v1/player`;
const roundurl = `http://localhost:4000/api/v1/round`;

class PokerModel {
  static all() {
    return fetch(playerurl)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in PokerModel.all', err);
        return { player: [] };
      });
  }

  // static getOne(id) {
  //   return fetch(`${url}/${id}`)
  //     .then((res) => res.json())
  //     .catch((err) => {
  //       console.log('Error fetching data in PokerModel.getOne', err);
  //       return { game: {} };
  //     });
  // }

  static create(newPlayer) {
    return fetch(playerurl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlayer)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in PokerModel.create', err);
      return { player: {} };
    });
  }

  // static update(gameId, updatedPoker) {
  //   return fetch(`${url}/${gameId}`, {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(updatedPoker)
  //   })
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     console.log('Error fetching data in PokerModel.update', err);
  //     return { game: {} };
  //   });
  // }

  static delete(playerId) {
    return fetch(`${playerurl}/${playerId}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in PokerModel.delete', err);
      return { player: {} };
    });
  }
}

export default PokerModel;