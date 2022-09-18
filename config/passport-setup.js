const passport= require('passport');
const GoogleStrategy= require('passport-google-oauth20');
const keys=require('./keys');


//passport.use will take two parametres one is the Strategy and another is a callback function
passport.use(new GoogleStartegy({
//options for the google start
clientID:keys.google.clientID,
clientSecret:keys.google.clientSecret,

}),()=>{
    //passport callback function
})