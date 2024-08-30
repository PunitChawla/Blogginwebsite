
import { Blog } from "../Hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCart"


export const FullBlog = ({ blog } : {blog:Blog}) =>{

    return <div>
        <AppBar/>
        <div className="flex justify-center">

    <div className="grid grid-cols-12 px-10 pt-12 max-w-screen-xl ">
        <div className="col-span-8 pr-3">
            <div className="text-5xl font-extrabold ">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-3">
                {/* {blog.createdAt.substring(0,10)} */}
            </div>
            <div className="text-slate-700">
                {blog.content}
            </div>
        </div>
        <div className="col-span-4">
            <div className="text-xl ">
                Author 
            </div>
            <div className="flex w-full  pt-3">
                <div className="pr-4 flex flex-col justify-center">
                   <Avatar name={ "Anonymous"} />
                </div>
                <div>
                  <div className="text-2xl font-semibold ">
                   { "Anonymous"}
                  </div>
                  <div className="text-slate-500">
                    Master of mirth , purveyor of puns and the funniest person in the kingdom.
                  </div>
                </div>
            </div>
            
        </div>
        
    </div>
        </div>
    </div>
}

