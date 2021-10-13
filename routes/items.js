var express = require('express');
var router = express.Router();

/* GET items listing. */
router.get('/', function(req, res, next) {
  res.json({
    title: "example title",
    description: "example description",
  });
});

/* GET single item. */
router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  res.send("single item");
});

module.exports = router;
