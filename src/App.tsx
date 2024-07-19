import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login";
import Navbar from "./components/Navbar";
import Logout from "./pages/LogoutLogic";
import About from "./pages/About";
import Services from "./pages/Services";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/about"
                    element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/services"
                    element={
                        <ProtectedRoute>
                            <Services />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </div>
    );
}

export default App;
