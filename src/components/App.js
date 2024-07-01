import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Landing from './pages/Landing';
import Registration from './pages/Registraition';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/registration' element={<Registration />} />
                        <Route path='/login' element={<Login />} />
                        <Route
                            path='/home'
                            element={
                                <ProtectedRoute element={<Home />} />
                            }
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
