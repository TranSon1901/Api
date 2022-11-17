import express from 'express'
import { Users } from '../model/users'
const UserRouter=express.Router()
  UserRouter.get('/', async (req,res)=>{
     try{
        const user= await Users.find({})
        res.status(200).json(user)
     }catch(error){
         res.status(500).json({message:error})
     }
  })
UserRouter.post('/', (req,res)=>{
   const user= new Users({
      name: req.body.name,
      email: req.body.email
   })
   user.save()
   .then(data=>{
      res.json(data)
   })
   .catch(err=>{
      res.json({message:err})
   })
})
export default UserRouter