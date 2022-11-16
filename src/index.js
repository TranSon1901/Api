import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const app=express()

dotenv.config()
const port=  process.env.PORT
const DB_CONNET= process.env.DB_CONNET

router(app)

app.use(express.json())
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://Transon:ts0905102364@cluster0.edjqdpd.mongodb.net/?retryWrites=true&w=majority', 
    {useNewUrlParser: true, 
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex:true
}).then(()=>{
    console.log('Database connnet')
}).catch(err=>{
    console.log('not connet')
})

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})
