var express = require('express');
var router = express.Router();
const fetch = require('isomorphic-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  const query = req.query.split('?')[1];
  const url = 'https://free.currencyconverterapi.com/api/v6/convert?compact=y&q='+query;
  fetch(url)
  .then(res.send)
});

module.exports = router;
