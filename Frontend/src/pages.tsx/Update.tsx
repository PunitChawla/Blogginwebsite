import { ChangeEvent, useState } from "react"
import { AppBar } from "../Components/AppBar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate, useParams } from "react-router-dom"
import { Alert } from "../Components/Alert"

export const Update = () =>{
    const navigate = useNavigate();
    const [title , setTitle] = useState("")
    const [content , setContent] = useState("")
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const { id } = useParams();
    return <div>
        <AppBar/>
       <div className="flex justify-center w-full pt-8">
            <div className=" max-w-screen-lg w-full">
                <input onChange={(e)=>{
                    setTitle(e.target.value)
                }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="title" />
            <TextEditor onChange={(e)=>{
                setContent(e.target.value)
            }}/>

            <div className="flex items-center justify-between px-3 py-2 border-t">
                
           <button onClick={ async ()=>{
            try {
                
             const response = await axios.patch(`${BACKEND_URL}/api/v1/blog/${id}` ,{
                title,
                content,
            },
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
           }
           } type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 ">
               Post comment
           </button>
       </div>
            </div>
        </div>
        {alertVisible && <Alert message={alertMessage} onClose={()=>{
                    setAlertVisible(false)
}}/>}
    </div>
}

function TextEditor( {onChange} : {onChange: (e:ChangeEvent<HTMLTextAreaElement>) =>void }){
    return <div>
        
<form>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
       <div className="px-4 py-2 bg-white rounded-t-lg ">
           <label  className="sr-only">Your comment</label>
           <textarea onChange={onChange} id="editor" rows={8} className=" focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 " placeholder="Write a comment..." required ></textarea>
       </div>
       
   </div>
</form>

    </div>
}