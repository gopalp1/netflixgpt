import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase"
import { useSelector } from "react-redux";
const Header = () => {
    const user = useSelector(store=> store.user)
    const navigate = useNavigate();
    const handleSignOut = () => {

        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="absolute px-8 py-2 z-10 bg-gradient-to-b from-black w-full flex justify-between items-center">
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="logo" width="150" />
            <div>
                {user &&
                <button onClick={handleSignOut} className="font-bold bg-red-700 p-3 text-white rounded hover:text-[15px]">Sign Out</button>
                }
            </div>
        </div>
    )
}
export default Header;