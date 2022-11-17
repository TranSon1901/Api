import express from 'express'
import { Outhor } from '../model/author'
const NewPageRouter=express.Router()
 NewPageRouter.get('/', async (req,res)=>{
    try{
      const outhor= await Outhor.find({})
      res.status(200).json(outhor)
    }catch(err){
      res.status(500).json({message:err})
    }
 })
 NewPageRouter.post('/', (req,res)=>{
   const outhor= new Outhor({
      name: req.body.name,
      email: req.body.email
   })
   outhor.save()
   .then(data=>{
      res.json(data)
   })
   .catch(err=>{
      res.json({message:err})
   })
})
export default NewPageRouter