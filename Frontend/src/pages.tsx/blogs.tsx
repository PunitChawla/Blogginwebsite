
import { AppBar } from "../Components/AppBar";
import { BlogCart } from "../Components/BlogCart";
import { BlogSkeleton } from "../Components/BlogSkeleton";
import { useBlogs } from "../Hooks"



export const Blogs = () =>{
        const{loading, blogs} = useBlogs();
        if(loading)
            {
                return <div>
                    <AppBar/>
                <div className="flex  justify-center">
                    
                    <div>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    </div>
                 </div>
                </div> 
            }
    return <div>
        <AppBar/>
    <div className="flex justify-center">

            <div >
                {blogs.map(blog=> 
                <BlogCart id={blog.blogId} authorName={"Punit" }
                 title={blog.title}     
                 content = {blog.content} 
                 publishedDate= {blog.createdAt.substring(0,10)}/>
                )}

            </div>
    </div>
    </div>
}