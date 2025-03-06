import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth"
import{auth} from "../utils/Firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
      
        dispatch(addUser({ uid, email, displayName: displayName || "User" }));
      } else {
        console.log("User is signed out");
        dispatch(removeUser());
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;