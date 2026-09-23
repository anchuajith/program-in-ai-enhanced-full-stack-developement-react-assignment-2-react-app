import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/products">Products</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/products/1">Product Detail </Link>

        </nav>
    );
}

export default Navbar;