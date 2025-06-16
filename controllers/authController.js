const User = require("../models/User")
const jwt = require("jsonwebtoken")


// signup user
const SignupUser = async (req, res) =>{
    console.log(req.body)
    const {fullName, email, password } = req.body // destructuring the requested body
    // console.log(fullname, email, password)
    try {
        // calling the signup method from the user model
        const user = await User.signup(fullName, email, password) 
        console.log({user})
        res.status(200).json({ user }) 


    } catch (error) {
        res.status(400).json({ error: error.message }) //send tghe error as a response
        console.log(error.message);   
    }

}

module.exports = {
    SignupUser
}