
import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

const userSchmea = new mongoose.Schema(
    {
        "name" : {type: String, required: true},
        "username" : {type: String, required: true},
        "key1" : {type: String, required: true},
        "key2" : {type: String, required: true}
    },
    {
        versionKey: false
    }
)


const User = mongoose.model('user', userSchmea);

export default User;