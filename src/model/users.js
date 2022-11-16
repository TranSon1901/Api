import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    fullName: {type:String},
    age:{type:String},
    email:{type:String},
    adress:{type:String},
})
const Users = mongoose.model('users',UserShema)

export default Users