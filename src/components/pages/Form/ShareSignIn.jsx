
import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ShareSignIn = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    // for google login --------------------------------
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                alert("user create successfully");
                navigate("/")
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className=" text-center space-y-3">
            <p className=" font-semibold text-base py-3">Or Sign In with</p>
            <div className=" space-x-3 text-white">
                <button className="  bg-slate-200 p-3 text-blue-500  rounded-full"><FaFacebookF /></button>
                <button className="  bg-slate-200 p-3 text-green-500  rounded-full"><FaLinkedinIn /></button>
                <button onClick={handleGoogleLogin} className="  bg-slate-200 p-3 text-red-500  rounded-full"><FaGoogle /></button>
            </div>
        </div>
    );
};

export default ShareSignIn;