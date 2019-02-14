var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {title: "Express"});
});

router.get('/helloworld', (req, res) => {
    res.render('helloworld', {title: "Hello, World!"});
});

module.exports = router;
