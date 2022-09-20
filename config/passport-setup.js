const passport= require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys=require('./keys');
const User = require('../models/user-model');


//passport.use will take two parametres one is the Strategy and another is a callback function
passport.use(new GoogleStrategy({
//options for the google start
callbackURL:'/auth/google/redirect',
clientID:keys.google.clientID,
clientSecret:keys.google.clientSecret,

},(accessToken,refreshToken,profile,done)=>{
    //passport callback function
   // console.log(profile);

   //check if user already exist in the database
   User.findOne({googleId:profile.id}).then((currentUser)=>{
    if(currentUser){
        //already have the user
        console.log("user is: ",currentUser)

    }else{
        //if not create user to the database
        new User({
            googleId: profile.id,
            username: profile.displayName
        }).save().then((newUser) => {
            console.log('new user created: ', newUser);
        });

    }
   });
    
})
);