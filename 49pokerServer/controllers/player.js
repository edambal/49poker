const db = require("../models");

const index = (req, res) => {
  
  db.Player.find({})
      .then((foundPlayers)=>{
        res.json({players: foundPlayers});
      })
      .catch((err) =>{
        res.json({Error: 'Unable to get your data'});
      });
};

const show = (req, res) => {
  db.Player.findById(req.params.id)
    .then((foundPlayer)=>{
      res.json({player:foundPlayer});
    })
    .catch((err)=>{
        res.json({Error: 'Unable to  get your data'});
    })

};


const create = (req, res) => {
  db.Player.create(req.body)
    .then((savedPlayer) =>{
      res.json({player: savedPlayer});
    })
    .catch((err)=>{
      res.json({Error: 'Unable to create'});
    })

};


const update = (req, res) => {

  db.Player.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((updatedPlayer) =>{
      res.json({player: updatedPlayer});
    })
    .catch((err) =>{
      res.json({Error: 'Error updating the data'});
    })
};
  

const destroy = (req, res) => {

  db.Player.findByIdAndDelete(req.params.id)
    .then((deletedPlayer)=>{
      res.json({player:deletedPlayer});
    })
    .catch((err)=>{
      res.json({Error: 'Error Deleting the Player'});
    })
};
  


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};