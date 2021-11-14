const { Router } = require('express');
const { signupPost, loginPost, userInfoPost } = require('../controllers/auth.controller');

const router = Router();

router.post('/signup', signupPost);
router.post('/login', loginPost);
router.post('/userinfo', userInfoPost);

module.exports = router;