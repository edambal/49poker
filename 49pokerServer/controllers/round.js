// Lets implement later

const db = require("../models");

const index = (req, res) => {
  
  db.Round.find({})
      .then((foundRounds)=>{
        res.json({rounds: foundRounds});
      })
      .catch((err) =>{
        res.json({Error: 'Unable to get your data'});
      });
};

const show = (req, res) => {
  db.Round.findById(req.params.id)
    .then((foundRound)=>{
      res.json({round:foundRound});
    })
    .catch((err)=>{
        res.json({Error: 'Unable to  get your data'});
    })

};


const create = (req, res) => {
  db.Round.create(req.body)
    .then((savedRound) =>{
      res.json({round: savedRound});
    })
    .catch((err)=>{
      res.json({Error: 'Unable to create'});
    })

};


const update = (req, res) => {

  db.Round.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((updatedRound) =>{
      res.json({round: updatedRound});
    })
    .catch((err) =>{
      res.json({Error: 'Error updating the data'});
    })
};
  

const destroy = (req, res) => {

  db.Round.findByIdAndDelete(req.params.id)
    .then((deletedRound)=>{
      res.json({round:deletedRound});
    })
    .catch((err)=>{
      res.json({Error: 'Error Deleting the Round'});
    })
};
  


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};