import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
import { type PropsWithChildren, useEffect } from "react";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.user === null) {
            navigate("/login", { replace: true });
        }
    }, [navigate, auth]);
    return <>{children}</>;
}
