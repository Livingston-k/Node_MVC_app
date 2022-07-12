var express = require('express');
var router = express.Router();
const { user } = require('../controllers')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('create');
});
router.post('/create', user.create);


module.exports = router;
