var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const phones = require('./../mocks/phones.json'); 
  res.status(200).json(phones);
});

module.exports = router;
