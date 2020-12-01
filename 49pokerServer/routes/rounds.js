// imports
const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.round.index);
router.get("/:id", ctrl.round.show);
router.post("/", ctrl.round.create);
router.put("/:id", ctrl.round.update);
router.delete("/:id", ctrl.round.destroy);

// exports
module.exports = router;