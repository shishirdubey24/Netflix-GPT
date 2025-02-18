import Header from "./Header"

const Login = () => {
  return (
    <div >
      <Header/>
      <div className="absolute ">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" />
      </div>
       
        <form className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white">
          <input type="text" placeholder="Email Address" className="p-2 m-2 "  />
          <input  type="password" placeholder="Enter password" className="p-2 m-2 "/>
          <button className="">Login</button>
        </form>
       </div>
   
  )
}

export default Login
