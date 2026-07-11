// Root component — sets up routing between pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Home from "./pages/Home";
import MatchDetail from "./pages/MatchDetail";
import MyParties from "./pages/MyParties";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/match/:matchId" element={<MatchDetail />} />
                    <Route
                        path="/my-parties"
                        element={
                            <ProtectedRoute>
                                <MyParties />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
