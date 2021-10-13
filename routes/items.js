var express = require('express');
var router = express.Router();

const list = require("./../mockup/items")

/* GET items listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(list);
});

/* GET single item. */
router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  const intId = parseInt(id, 10);
  const itemById = list.filter(item => item.id === intId)[0];
  console.log(itemById)
  if (itemById) {
    res.status(200).json(itemById);
  } else {
    res.status(404).send("Element not found");
  }
});

module.exports = router;
