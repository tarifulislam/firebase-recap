import { Link, useNavigate } from "react-router-dom";

import sidePhoto from '../../../../public/login.svg'
import ShareSignIn from "./ShareSignIn";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Registration = () => {
    const { createUser, handleUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl);

        // for password validations -------------------------------------
        if (password.length < 6) {
            alert("Password must be six charecter")
            return;
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
            alert("Password is invalid")
            return;
        }

        createUser(email, password) // for create user using email and password.
            .then(res => {
                handleUpdateProfile(name, photoUrl) // add photo and name for user.
                    .then(() => {
                        alert("user create successfully")
                        navigate("/")
                    })
            })
            .catch(err => alert("user create error: "))
    }

    return (
        <div className="container mx-auto min-h-screen py-9 px-[10%]">
            <div className=" flex justify-between items-center">
                <div className=" w-2/4">
                    <img className=" ml-[10%] " src={sidePhoto} alt="" />
                </div>

                <div className=" w-2/4 p-12 rounded-md border">
                    <h1 className="text-4xl font-bold py-6 text-center">Sign In</h1>
                    <form onSubmit={handleRegister} className=" space-y-3">

                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" placeholder="Photo url" name="photoUrl" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-secondary">Sign in</button>
                        </div>
                    </form>
                    <ShareSignIn></ShareSignIn>
                    <h4 className=" py-4 font-semibold text-base text-center">Have an account? <Link to='/login' className=" text-red-600">log In</Link> </h4>

                </div>
            </div>
        </div>
    );
};

export default Registration;