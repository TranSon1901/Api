import express from 'express'
const homeRouter=express.Router()
import { product } from '../model/product'
 homeRouter.get('/', async (req,res)=>{
    try{
       const products= await product.find({})
       res.status(200).json(products)
    }
    catch(err){
       res.status(500).json({message:err})
    }
 })

export default homeRouter

