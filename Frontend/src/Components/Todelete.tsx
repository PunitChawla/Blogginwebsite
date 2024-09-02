import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { Alert } from "./Alert";

export const Todelete = ({ id }: { id:number })=>{
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate();
    return<div className="">
    <div className="pt-10 pr-5">
        <button onClick={async ()=>{
            try {
                
             const confirmDelete = window.confirm("Are you sure you want to delete this post?");
             if (!confirmDelete) return;
             
            const response = await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`,
           {
               headers :{
                   Authorization : localStorage.getItem("token")
               }
           }
         );
           navigate(`/blog`)
        } catch (error) {
            setAlertMessage('You are not the author of this blog ');
            setAlertVisible(true)
        }
          }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-4">Delete</button>

        </div>
        {alertVisible && <Alert message={alertMessage} onClose={()=>{
                    setAlertVisible(false)
}}/>}   
    </div>
}
