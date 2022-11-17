import mongoose from "mongoose";

const OuthorSchema = mongoose.Schema({
   name: {
     type: String,
     require: true
   },
   email: {
      type:String,
      require: true
   },
   date: {
     type: String,
     default: Date.now
   }
})
const Outhor = mongoose.model("outhor",OuthorSchema)
export { Outhor }
