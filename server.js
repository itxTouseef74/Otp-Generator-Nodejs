require('dotenv/config');
const mongoose=require ('mongoose');
const app=require('./app');
const port=2001
mongoose.connect(process.env.MONGODB_URL_LOCAL).then(()=>console.log("DB connected")).catch(()=>console.log("DB not connected"));
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})