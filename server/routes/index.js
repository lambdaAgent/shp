var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
let request = 0;
router.get('/convert/:toConvert', function(req, res, next) {
  // must debounce
  const params = req.params.toConvert;
  const url = 'https://free.currencyconverterapi.com/api/v6/convert?compact=y&q='+params;
  setTimeout(() => {
    fetch(url)
    .then(result => {
      if(!result.ok) { throw result};
      return result.json();
    })
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(result => {
      res.status(404).send(result)
    })
  }, request * 50);
});

module.exports = router;
