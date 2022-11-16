import express from 'express'
import Users from '../model/users'
const UserRouter=express.Router()
UserRouter.get('/', async(req,res)=>{
   const users = await Users.find({}) 
   try{
    console.log('ok')
       res.send(users)
   }catch(err){
      res.status(500).send({err:'error'})
   }
})

export default UserRouter