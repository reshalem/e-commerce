const router = require('express').Router();
const UserController = require('../controllers/userController.js');

router.get('/', function(req, res) {
    res.send('Home Page');
});

router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;