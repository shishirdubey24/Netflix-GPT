import {  signOut } from "firebase/auth";
import { auth} from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "../utils/Constant";
const Header = () => {
  const navigate=useNavigate();
  const User=useSelector((store)=>store.user)
  const handleSignout=()=>{
    console.log("SignOut Is Clicked");
    signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
   
      console.error("Sign out error:", error);
     
    });
  }
  return (
  <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between">
   
    <img className="w-44"
      
     src= {Image} />

   {User && <div className="flex p-2">
     <img className="w-12 h-12"
      src="/public/Images/NetFlix_user-icon.png"/>
     <button className="font-bold text-white" onClick={handleSignout}>(SignOut)</button>
     </div>  } 
      
    </div>
  )
}

export default Header
