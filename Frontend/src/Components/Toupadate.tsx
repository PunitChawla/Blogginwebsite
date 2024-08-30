
import { useNavigate } from "react-router-dom"

export const ToUpadte = ({ id }: { id:number })=>{
    const navigate = useNavigate();


    return<div className="">
    <div className="pt-10 pr-5">
        <button onClick={async ()=>{
             
           navigate(`/update/${id}`)

          }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">Update</button>
        </div>
    </div>
}
