import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase"
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {

    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
    });
  }

  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser(
          { uid: uid, email: email, displayName: displayName }
        ));
        navigate("/browser");

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

      }
    });
  }, [])
  return (
    <div className="absolute px-8 py-2 z-10 bg-gradient-to-b from-black w-full flex justify-between items-center">
      <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="logo" width="150" />
      <div>
        {user &&
          <button onClick={handleSignOut} className="font-bold bg-red-700 p-3 text-white rounded "><span className="hover:text-[18px]">Sign Out</span></button>
        }
      </div>
    </div>
  )
}
export default Header;