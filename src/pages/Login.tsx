import { useRef } from "react";
import logo from "../logo.svg";
import "./Login.css";
import { useAuth } from "../utils/AuthProvider";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = usernameRef.current!.value;
        const password = passwordRef.current!.value;
        auth.login({
            username: username,
            password: password,
        });
        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="login-logo">
                <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        ref={usernameRef}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        ref={passwordRef}
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
}
