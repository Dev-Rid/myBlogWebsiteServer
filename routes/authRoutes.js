const express = require("express")

const {
    SignupUser
} = require("../controllers/authController")

const router = express.Router()


// register route
router.post("/signup", SignupUser)


// // Register 
// router.post("/register", async (req, res) =>{
//     const {email, password} = req.body

//     try {
//      const existingUser = await
//      User.findOne({email}) 
//         if(existingUser) return
//         res.status(400).json({message: "User already exist"})
     
//         const hashedPassword = await bcrypt.hash(password, 10)
//         const user = await User.create({email, password: hashedPassword})
//         res.status(201).json({message: "User created", userId: user._id})

//     } catch(err) {
//         res.status(500).json({message: "Registration failed"})
//     }

// })




// login
// router.post("/login", async (req, res) =>{
//     const {email, password} = req.body
    
//     try{
//         const user = await
//         User.findOne({email});
//         if(!User) return
//         res.status(400.).json({message: "Invalid credentials"})

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (isMatch) return
//         res.status(400).json({message: "Invalid credentials"})

//         const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
//         res.json({token})
        
//     } catch(err) {
//         res.status(500).json({error: "Login failed"})
//     }
// })

module.exports = router