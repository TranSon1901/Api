import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
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
const Users = mongoose.model("users",UserSchema)
export { Users}
