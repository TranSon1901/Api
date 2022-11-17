import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
   name: {
     type: String,
     require: true
   },
   description: {
      type:String,
      require: true
   },
   date: {
     type: String,
     default: Date.now
   }
})
const product = mongoose.model("products",ProductSchema)
export { product }
