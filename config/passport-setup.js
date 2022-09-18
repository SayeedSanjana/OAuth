const passport= require('passport');
const GoogleStrategy= require('passport-google-oauth20');


//passport.use will take two parametres one is the Strategy and another is a callback function
passport.use(new GoogleStartegy({
//options for the google start
}),()=>{
    //passport callback function
})