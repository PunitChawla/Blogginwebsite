const express = require("express")
const { Blog, User } = require("../database")
const  jwt  = require('jsonwebtoken');
const { authMiddleware } = require("../Middleware/middleware");
const zod = require('zod')
const router = express();
router.use(express.json())


const blogSchema = zod.object({
    title : zod.string().min(5),
    content : zod.string().min(5),
    image : zod.string().optional(),
})
router.post('/', authMiddleware ,  async(req, res)=>{

    const responce = blogSchema.safeParse(req.body)
    if(!responce.success)
    {
        return res.json({
            msg : " please enter a valid input",
            error : responce.error
        })
    }
    try {
        const userid = req.userId;
        const blog = await Blog.create({
            title : req.body.title,
            content : req.body.content,
            userId : userid
        })

        return res.json({
            msg : "blog created ",
            id : blog.blogId
        })
    } catch (error) {
        return res.json({
            msg : "error while creating blog ", 
            error : error
        })
    }
})
router.get('/bulk', async(req, res)=>{
    const blogs = await Blog.find();
    return res.json({
        blogs : blogs
    })
})

router.get('/:id', async(req, res)=>{
    const id = req.params.id
    const blog = await Blog.findOne({
        blogId : id
    })
    if(blog)
    {
        return res.json({
            blog : blog
        })
    }
    return res.json({
        error : " blog not found by this  blog id "
    })
})
module.exports = router