var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    const userCollection = req.db.get('userCollection');
    userCollection.find({}, {}, (e, data) => {
        res.render('users', {userList: data});
    });
});

module.exports = router;
