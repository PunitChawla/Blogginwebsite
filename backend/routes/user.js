const express = require("express");
const zod = require("zod");
const { User, Blog } = require("../database");
const { JWT_SECRET } = require("../config");
const router = express.Router();
const jwt = require("jsonwebtoken")

const signupSchema = zod.object({
    username: zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string().min(6)
})
router.post("/signup", async (req, res)=>{
    
    const responce = signupSchema.safeParse(req.body)

    if(!responce.success)
    {
        return res.status(411).json({
            msg : "Invalid input",
            error : responce.error
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })
    if(existingUser)
    {
        return res.status(411).json({
            msg :"Username already taken  please Signin with your password"
        })
    }

    try {
        
        const user = await User.create({
            username : req.body.username,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            password : req.body.password
        })
        const userId = user._id;
        await Blog.create({
            userId
        })

        const token = jwt.sign({
            userId
        }, JWT_SECRET)

        res.json({
            message: "User created successfully",
            token: token
        })

    } catch (error) {
        return res.json({
            msg : "error while creating user",
            error  : error
        })
    }
})

const signinSchema = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6)
})

router.post("/signin", async (req, res)=>{

    const responce = signinSchema.safeParse(req.body)
    if(!responce.success)
    {
        return res.status(411).json({
            msg : "Invalid input",
            error : responce.error
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }
    
    res.status(411).json({
        message: "Error while logging in"
    })
})
module.exports = router
