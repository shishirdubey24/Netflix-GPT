import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
const Body = () => {
 
 const router=createBrowserRouter([
    {
        path :"/",element: <Body/>
    },
    {
        path : "/Browse", element: <Browse/>
    },
    {
        path : "/Login", element: <Login/>
    }
 ])
 
    return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Body
