const router=require('express').Router();
const {signUp , verifyOtp}=require('../controllers/userControllers');

router.route('/signup')
.post(signUp);
router.route('/signUp/verify')
.post(verifyOtp);
module.exports=router;