import { Link, useNavigate } from "react-router-dom";
import ShareSignIn from "./ShareSignIn";
import sidePhoto from '../../../../public/login.svg'
import { useContext, useRef } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const emailRef = useRef(null) // user for get email from outside of form. use - ref={emailRef} in input field.
    {/* <input type="email" name="email" ref={emailRef} required /> */ }

    const handleLogin = e => {  // event handler for form.
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            alert("Password must be six charecter")
            return;
        }

        signInUser(email, password)
            .then(res => {
                alert("login successful")
                e.target.reset()
                navigate("/")
            })
            .catch(err => {
                alert("Sorry wrong user , pass")
            })
    }

    // for reset email -----------------------------------
    const handleForgetPassword = () => {
        const email = emailRef.current.value; // for get value from form email field using ref.
        if (!email) {
            console.log("please provite an email", emailRef.current.value);
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("please write a valid email");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("please check your email")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container mx-auto min-h-screen py-9 px-[10%]">
            <div className=" flex justify-between items-center">
                <div className=" w-2/4">
                    <img className=" ml-[10%] " src={sidePhoto} alt="" />
                </div>

                <div className=" w-2/4 p-12 rounded-md border">
                    <h1 className="text-4xl font-bold py-6 text-center">Log in</h1>
                    <form onSubmit={handleLogin} className=" space-y-3">

                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" ref={emailRef} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <span onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</span>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-secondary">log in</button>
                        </div>
                    </form>
                    <ShareSignIn></ShareSignIn>
                    <h4 className="py-4 font-semibold text-base  text-center">create new account? <Link to='/registration' className=" text-red-600">sign In</Link> </h4>

                </div>
            </div>
        </div>
    );
};

export default Login;