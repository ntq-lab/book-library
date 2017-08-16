var express = require('express')
  , router = express.Router();

router.get('/', function(req, res) {
    res.render('site/index', { message: 'Hello there!' })
})

module.exports = router