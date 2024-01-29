import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser"
 import { RouterProvider } from "react-router-dom";
 import {  onAuthStateChanged } from "firebase/auth";
 import { auth } from "../Utils/firebase"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
 const Body = () => {
 const dispatch = useDispatch()
  useEffect (()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,name:displayName}))
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  },[])


    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"browser",
            element:<Browser/>,
        }
    ])
return (
  <div>
    <RouterProvider router={appRouter}/>
  </div> 
)
}
export default Body;