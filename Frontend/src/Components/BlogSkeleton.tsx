export  const BlogSkeleton = () =>{

    return<div>
    <div role="status" className=" animate-pulse">

    <div>
            <div className="border-b border-slate-200 pb-4 pt-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex ">
                    <div className="flex justify-center flex-col  ">
                        {/* <Avatar name={authorName} /> */}
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    </div>
                    <div className="flex justify-center flex-col font-extralight pl-2">
                        {/* {authorName} */}
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                    </div>
                    <div className="pl-2 font-thin text-slate-500">
                    {/* {publishedDate} */}
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                    </div>
                </div>
                <div className="text-xl font-semibold pt-1">
                    {/* {title} */}
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                </div>
                <div className="text-md font-thin pt-1">
                    {/* {content.slice(0,100) + "..."}  */}
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                </div>

                <div className="text-slate-500 text-sm font-thin pt-3">
                    {/* {`${Math.ceil(content.length /100)} minutes read`} */}
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                </div>
            </div>
   </div>
    <span className="sr-only">Loading...</span>

</div>
    </div>
}
