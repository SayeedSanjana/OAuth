const express= require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();

//set up view engine
app.set('view engine','ejs');

//set routes
app.use('/auth',authRoutes);


//create home route
app.get('/',(req,res)=>{
    res.render("home");
})

app.listen(3000,()=>{
    console.log("app listening in port 3000")
});