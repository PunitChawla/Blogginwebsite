import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Auth = ({ type }:{type: "signup" | "signin" }) =>{
    const navigate = useNavigate();
    interface PostInput {
        firstName : string,
        lastName : string,
        password : string,
        username : string
    }

    const [postinput , setPostinput] = useState<PostInput>({
        firstName : "",
        lastName : "",
        password : "",
        username : ""
    })

    
    async function sendrequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" :"signin"}`,postinput)
            const jwt = response.data.token;
            localStorage.setItem("token" , jwt)
            navigate(`/blog`)
        } catch (error) {
        //   setAlertMessage('Incorrect  credentials');
        //   setAlertVisible(true)
        console.log("galt baat ")
        }
    }
    return (
     <div className="flex flex-col justify-center h-screen">

        <div className="flex justify-center">
            <div className="px-10">
                <div className="font-extrabold text-3xl">
            create a account 
                </div>
                <div className="text-gray-600">
                {type == "signin" ? "Don't have any account " :"Already have an account ?" } 
                <Link to={ type == "signin" ? '/signup' : '/signin'} className="text-blue-600 underline">  {type == "signin" ? "Sign up": "Sign in" }</Link>
                </div>

            <div className="pt-6 w-96">
                { type == "signup" ?  <LablledInput label="First Name" placeholder="John..." onChange={(e)=>{
                    setPostinput({
                        ...postinput,
                        firstName : e.target.value
                    })
                }}></LablledInput>:null}
                { type == "signup" ?  <LablledInput label="Last Name" placeholder="doe...." onChange={(e)=>{
                    setPostinput({
                        ...postinput,
                        lastName : e.target.value
                    })
                }} ></LablledInput>:null}
            
                <LablledInput label="Email" placeholder="xyz@gmail.com" onChange={(e)=>{
                    setPostinput({
                        ...postinput,
                        username : e.target.value
                    })
                }}></LablledInput>
                <LablledInput label="Password"  placeholder="Must container 6 letter " type="password" onChange={(e)=>{
                    setPostinput({
                        ...postinput,
                        password : e.target.value
                    })
                }}></LablledInput>

                <button onClick={sendrequest} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full mt-7">
                    {type ==  "signup" ? "Sign up" : "Sign in"}
                </button>
            </div>
            </div>
        </div>
     </div>   
    )
}

interface lablledInputType  {
    label : string;
    placeholder : string;
    onChange : (e:ChangeEvent<HTMLInputElement>) =>void;
    type?: string
}

function LablledInput({label, placeholder, onChange, type} :lablledInputType ){

    return <div>
        <label className="block mb-2 text-sm font-semibold text-gray-900 pt-4">{label}</label>
        <input  type={type || "text"} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}