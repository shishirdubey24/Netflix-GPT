import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const[isSignedIn,setSignedIn]=useState(true);

 const handleSignup=()=>{
  setSignedIn(!isSignedIn)
 }

  return (
    <div >
      <Header/>
      <div className="absolute ">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" />
      </div>
       
   <form className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl">{isSignedIn?"SIgnIn":"SignUp"}</h1>
        {!isSignedIn&& ( <input  type="Name" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"/>) }
        {!isSignedIn &&(<input type="Phone Number" placeholder="Number" className="p-2 my-2 w-full bg-gray-700"/>)}
          <input type="text" placeholder="Email Address" className="p-2 my-2 w-full  bg-gray-700"  />
          <input  type="password" placeholder="Enter password" className="p-2 my-2 w-full bg-gray-700"/>

     
 <button className="p-2 my-4 bg-red-500 w-full rounded-lg ">{isSignedIn?"SignIn":"SingUp"}</button>
        
        <p className="py-4 " onClick={handleSignup}>{isSignedIn?"New here SIgnup NOw":"Already regestered Lets SinIn Now"}</p> 
        </form>
       

       </div>
   
  )
}

export default Login
