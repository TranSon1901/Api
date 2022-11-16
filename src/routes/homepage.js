import express from 'express'
const homeRouter=express.Router()
 homeRouter.get('/', (req,res)=>{
    return res.send('this is home page')
 })

export default homeRouter

