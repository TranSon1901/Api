import express from 'express'
const NewPageRouter=express.Router()
 NewPageRouter.get('/',(req,res)=>{
    return res.send('This is NewPage')
 })

export default NewPageRouter