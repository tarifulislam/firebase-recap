
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

    const { logOut, user } = useContext(AuthContext)
    return (
        <div className="py-6">
            <div className="container mx-auto flex items-center  justify-between">
                <div className="font-bold text-2xl"><h2>Firebase</h2> </div>
                <div className="space-x-3 flex items-center">
                    <NavLink to='/'>Home</NavLink>

                    {
                        user?.email ? <div className="flex  items-center">
                            <div className="flex items-center">
                                <img className=" w-6 mx-2 rounded-full" src={user?.photoURL} alt="" />
                                <p className=" mr-3  text-sm font-semibold">{user?.displayName}</p>
                            </div>
                            <NavLink onClick={logOut}>
                                <button className="border p-2 rounded-md">logout</button>
                            </NavLink>
                        </div>
                            :
                            <NavLink to='/login'>
                                <button className="border p-2 rounded-md">Login</button>
                            </NavLink>
                    }

                </div>
            </div>
        </div>

    );
};

export default Header;