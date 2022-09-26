//create instance of the express router
const router= require('express').Router();
const passport=require('passport');

//auth login
router.get('/login' ,(req,res)=>{
    res.render('login');
});

//auth logout
router.get('/logout',(req,res)=>{
    //handle with passport
    res.send("Logging out");
});

//auth with google
router.get('/google', passport.authenticate('google',{
    //here there will be a scope property which will tell passport what property to retrieve from the user profile
    scope:['profile']

}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile');
});

module.exports=router;