const express = require("express")
const { Blog, User } = require("../database")
const  jwt  = require('jsonwebtoken');
const { authMiddleware } = require("../Middleware/middleware");
const zod = require('zod')
const router = express();
router.use(express.json())


const blogSchema = zod.object({
    title : zod.string(),
    content : zod.string(),
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


router.patch('/:blogId', authMiddleware , async (req, res) => {
    const { blogId } = req.params;
    const responce = blogSchema.safeParse(req.body)
    if(!responce.success)
    {
        return res.json({
            msg : " please enter a valid input",
            error : responce.error
        })
    }
    const { title, content } = req.body;  


    try {
      
      const blogIdNumber = parseInt(blogId, 10);
      const updatedPost = await Blog.findOneAndUpdate(
        { blogId: blogIdNumber },  
        { title, content },        
        { new: true }              
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      if(updatedPost.userId != req.userId)
      {
        return  res.status(500).json({msg : " you are not author of this post "})
      }
      res.status(200).json({ message: 'Blog post updated successfully', updatedPost });
    } catch (error) {

      console.error('Error updating blog post:', error);

      res.status(500).json({ message: 'Error updating blog post', error });
    }
  });


router.delete('/:blogId', authMiddleware, async (req, res) => {
    const { blogId } = req.params;

    try {
  
      const blogIdNumber = parseInt(blogId, 10);
  
      // Find the blog post by blogId
      const blogPost = await Blog.findOne({ blogId: blogIdNumber });

      if (!blogPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }

      if( blogPost.userId != req.userId){
          return res.status(500).json({msg : "you are not the author of this blog "})
        }
            await Blog.findByIdAndDelete(blogPost._id); 
            res.status(200).json({ message: 'Blog post deleted successfully' });
        
    } catch (error) {
      console.error('Error deleting blog post:', error);
      res.status(500).json({ message: 'Error deleting blog post', error });
    }
  });
module.exports = router