import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";

export default function Logout() {
    const auth = useAuth();
    if (auth.user !== null) {
        auth.logout();
    }
    return <Navigate to="/" replace={true} />;
}
