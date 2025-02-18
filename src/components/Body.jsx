import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
const Body = () => {
 
 const router=createBrowserRouter([
    {
        path :"/",element: <Login/>
    },
    {
        path : "/Browse", element: <Browse/>
    },
   
 ])
 
    return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Body
