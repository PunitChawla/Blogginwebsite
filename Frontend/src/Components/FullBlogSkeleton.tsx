export const FullBlogSkeleton = () => {

    return <div>
        
<div role="status" className="max-w-sm animate-pulse">

<div>
        <div className="flex justify-center">

    <div className="grid grid-cols-12 px-10 pt-12 max-w-screen-xl ">
        <div className="col-span-8 pr-3">
            <div className="text-5xl font-extrabold ">
                   <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                {/* {blog.title} */}
            </div>
            <div className="text-slate-500 pt-3">
                   <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                {/* Post on Auguest 24 2028 */}
            </div>
            <div className="text-slate-700">
                {/* {blog.content} */}
            </div>
        </div>
        <div className="col-span-4">
            <div className="text-xl ">
                {/* Author  */}
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
            </div>
            <div className="flex w-full  pt-3">
                <div className="pr-4 flex flex-col justify-center">
                   {/* <Avatar name={blog.author.name || "Anonymous"} /> */}
                   <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>
                <div>
                  <div className="text-2xl font-semibold ">
                   {/* {blog.author.name || "Anonymous"} */}
                   <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                  </div>
                  <div className="text-slate-500">
                    {/* Master of mirth , purveyor of puns and the funniest person in the kingdom. */}
                   <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>

    <span className="sr-only">Loading...</span>
</div>

    </div>
}