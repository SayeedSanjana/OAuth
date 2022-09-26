const router= require('express').Router();

const authCheck = (req,res,next)=>{

    //if user is not logged in
    if(!req.user){
        res.redirect('/auth/login');
    }else{
        //if user is not logged in
        next();
    }
}

router.get('/', authCheck, (req,res)=>{
    res.send("you are logged in " + req.user.username);
});

module.exports=router;