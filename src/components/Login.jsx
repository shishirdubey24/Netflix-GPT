import { useState,useRef } from "react"
import Header from "./Header"
import ValidationForm from "../utils/ValidationForm";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { auth} from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { Logo } from "../utils/Constant";

const Login = () => {
  const[isSignedIn,setSignedIn]=useState(true);
  const [errormsg,seterrormsg] = useState(null);
  const navigate = useNavigate();
 const handleSignup=()=>{
  setSignedIn(!isSignedIn)
 }
const handleBtnClick=()=>{
  // step-1:: validate user 
 const message=ValidationForm(email.current.value, password.current.value);
 seterrormsg(message); 
 if(message) return;
  
  //SIgn-up Logic

 if(!isSignedIn){
 //create user account with Firebase Config

  createUserWithEmailAndPassword(auth, 
    email.current.value,
     password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
     
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrormsg(errorMessage+errorCode);
    
    });
 }
 else{
  signInWithEmailAndPassword(auth,email.current.value,
    password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Sign-in User is here",user);
    navigate("/Browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Triggered error: " + errorMessage)
   seterrormsg(errorMessage+"\n\n"+errorCode)
  });
 }
}
const email=useRef(null);
const password=useRef(null);
  return (
    <div >
      <Header/>
      <div className="absolute ">
      <img src= {Logo} />
      </div>
       
   <form  onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl">{isSignedIn?"SIgnIn":"SignUp"}</h1>


        {!isSignedIn&& ( <input  type="Name" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"/>) }


        {!isSignedIn &&(<input type="Phone Number" placeholder="Number" className="p-2 my-2 w-full bg-gray-700"/>)}


          <input ref={email} type="text" placeholder="Email Address" className="p-2 my-2 w-full  bg-gray-700"  />
          <input ref={password} type="password" placeholder="Enter password" className="p-2 my-2 w-full bg-gray-700"/>

<p className="text-red-800 font-bold text-lg py-2.5" > {errormsg }</p>     
 <button className="p-2 my-4 bg-red-500 w-full rounded-lg " onClick={handleBtnClick}>{isSignedIn?"SignIn":"SingUp"}</button>
        
        <p className="py-4 " onClick={handleSignup}>{isSignedIn?"--> New here SIgnup Now <--":"-->Already regestered Lets SinIn Now <--"}</p> 
        </form>
       

       </div>
   
  )
}

export default Login
