import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const app=express()

dotenv.config()
const port=  process.env.PORT
const DB_CONNET= process.env.DB_CONNET


app
app.use(bodyParser.json())

// {useNewUrlParser: true, 
// useUnifiedTopology:true,}
mongoose.connect("mongodb+srv://son:son@cluster0.edjqdpd.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser: true,
    useUnifiedTopology:true})
    const db= mongoose.connection
    db.on('error',(error)=>console.log(error))
    db.once('open',()=>console.log('conneted to database'))
    
router(app)

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})