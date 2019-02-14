const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/check', (req, res) => {
    // TODO see request param
    console.log(req.baseUrl);
    res.redirect('/users');
})

module.exports = router;