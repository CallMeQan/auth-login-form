import { useAuth } from "../utils/AuthProvider";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const auth = useAuth();
    return (
        <nav>
            <Link to="/" className="title">
                Gayer website
            </Link>
            {auth.user !== null && (
                <div>
                    <p>user: {auth.user.username}</p>
                    <p>Password: {auth.user.password}</p>
                </div>
            )}
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    {auth.user === null ? (
                        <NavLink to="/login">Login</NavLink>
                    ) : (
                        <NavLink to="/logout">Logout</NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
}
