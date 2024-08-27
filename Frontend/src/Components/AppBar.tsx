import { Link } from "react-router-dom"
import { Avatar } from "./BlogCart"
export const AppBar = (  ) =>{
    return <div className="border-b flex justify-between px-10 py-4 w-full">
        <Link to={'/blog'}  className="flex flex-col justify-center">
            Medium
        </Link>
        <div>
            <Link to={'/publish'}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">New</button>
            </Link>
            <Avatar name= "Punit"/>
        </div>
    </div>
}
