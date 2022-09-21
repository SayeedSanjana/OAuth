const express= require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup=require('./config/passport-setup');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const app = express();
const cookieSession=require('cookie-session');
const passport= require('passport');


//set up view engine
app.set('view engine','ejs');

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookieKey]
}))

//initialize passport (imiddleware)
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log("Connected to mongodb");
})

//set routes
app.use('/auth',authRoutes);


//create home route
app.get('/',(req,res)=>{
    res.render("home");
})

app.listen(3000,()=>{
    console.log("app listening in port 3000")
});