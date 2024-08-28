import { AppBar } from "../Components/AppBar";
// import { BlogSkeleton } from "../Components/BlogSkeleton";
import { FullBlog } from "../Components/FullBlog";
import { FullBlogSkeleton } from "../Components/FullBlogSkeleton";
import { Todelete } from "../Components/Todelete";
// import { FullBlogSkeleton } from "../Components/fullblogSkeletion";
import { useBlog, } from "../Hooks"
import { useParams } from "react-router-dom";
export const Blog = () =>{

    const { id } = useParams();

    const {loading , blog} = useBlog({
        id : id || ""
    });

    if(loading || !blog )
    {
        return <div>
        <AppBar/>
            <div className=" flex justify-center ">
                <div>
                    <FullBlogSkeleton></FullBlogSkeleton>
                    <FullBlogSkeleton></FullBlogSkeleton>
                    <FullBlogSkeleton></FullBlogSkeleton>
                    <FullBlogSkeleton></FullBlogSkeleton>
                </div>
        </div>
            </div>
    }   
    return <div>
        <FullBlog blog={blog}/>
       
        <Todelete id={id}></Todelete>
    </div>
}