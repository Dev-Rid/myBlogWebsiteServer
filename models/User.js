const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")


const Schema = mongoose.Schema

const userSchema = new Schema({  
    fullName: {
        type: String,
        required: true,
        trim: true        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

})



// static signup method
userSchema.statics.signup = async function(fullName, email, password) {
    // Validation
    if(!fullName || !email || !password){
        throw Error("All fields must be filled")
    }


    if (!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }

    
    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not valid")
    }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error("Email already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({fullName, email, password: hash})
    return user

 }


module.exports = mongoose.model("User", userSchema)
