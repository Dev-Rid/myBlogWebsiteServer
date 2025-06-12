const User = require("../models/User")
const jwt = require("jsonwebtoken")


// signup user
const SignupUser = async (req, res) =>{
    const {fullName, email, password } = req.body // destructuring the requested body
    // console.log(fullname, email, password)
    try {
        // calling the signup method from the user model
        const user = await User.signup(fullName, email, password) 
        console.log({user})
        res.status(200).json({ user })

        // // create a token
        // const token = createToken(user ._id)
        // res.status(200).json({ email, token }) //send the user as a response

    } catch (error) {
        res.status(400).json({ error: error.message }) //send tghe error as a response
        console.log(error.message);   
    }

}

module.exports = {
    SignupUser
}