import express from 'express'
const homeRouter=express.Router()
 homeRouter.get('/',(req,res)=>{
    return res.send('This is homePage')
 })

export default homeRouter