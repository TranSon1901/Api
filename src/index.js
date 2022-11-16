import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const app=express()

dotenv.config()
const port=  process.env.PORT
const DB_CONNET= process.env.DB_CONNET

app.use(express.json)
// app.use(bodyParser.json())

// mongoose.connect(DB_CONNET, {useNewUrlParser: true , useUnifiedTopology: true},
//     ()=>console.log('connnet to Db'))

router(app)
app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})
