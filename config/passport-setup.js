const passport= require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys=require('./keys');


//passport.use will take two parametres one is the Strategy and another is a callback function
passport.use(new GoogleStrategy({
//options for the google start
callbackURL:'/auth/google/redirect',
clientID:keys.google.clientID,
clientSecret:keys.google.clientSecret,

},(accessToken,refreshToken,profile,done)=>{
    //passport callback function
    console.log(profile);
})
)