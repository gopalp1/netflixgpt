import { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../Utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";

import { auth } from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
    const [isSignIn, SetissignIn] = useState(true);
    const [error, Seterror] = useState({})

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)
    const toggleButton = () => {
        SetissignIn(!isSignIn);
    }

    const submit = (type) => {
        const errorMsg = formValidation(email.current.value, password.current.value);
        Seterror(errorMsg);
        console.log(email.current.value, "click")

        if (errorMsg) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        // Profile updated!
                        // ...
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user, "user signup");
                    navigate("/browser");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        } 
        else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user, "user signIn");
                    navigate("/browser");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }
    return (
        <div className="relative" >
            <Header />

            <img className="block brightness-[.3] object-cover w-[100vw] h-[100vh]" src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background img" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   w-full sm:w-[400px]  bg-black  p-10 bg-opacity-70 ">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col text-white ">
                    <h1 className=" font-bold text-3xl mb-8" > {isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn &&
                        <input ref={name} 
                        type="text" placeholder=" Enter your Name" className="p-4 mb-4  rounded bg-gray-700" />
                    }
                    <input
                        ref={email}
                        type="text" placeholder=" Enter your email" className="p-4 mb-4  rounded bg-gray-700" />
                    <input
                        ref={password}
                        type="password" placeholder="Enter Password" className="p-4 mb-8 rounded bg-gray-700" />
                    <button className="bg-red-700 p-3 mb-4 rounded-lg" onClick={() => submit()}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                    <p className="mb-24" onClick={toggleButton}> {isSignIn ? "New to Netflix ? Sign Up Now" : "Already Registered ? Sign In"}</p>
                </form>
            </div>
        </div>
    )
}
export default Login;


// import { getAuth, updateProfile } from "firebase/auth";
// const auth = getAuth();
