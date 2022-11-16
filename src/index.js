import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index'

const app=express()

dotenv.config()
const port=  process.env.PORT

router(app)
app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})