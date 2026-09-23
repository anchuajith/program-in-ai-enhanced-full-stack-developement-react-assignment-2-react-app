import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-black text-white h-20 flex justify-end items-center sticky top-0">
             <nav>

                <Link to="/" className="font-bold m-10">Home</Link>

                <Link to="/about" className="font-bold m-10">About</Link>

                <Link to="/users" className="font-bold m-10">Users</Link>

            </nav>
        </div>
       
    );
}

export default Navbar;