import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Landing from './pages/Landing';
import Registration from './pages/Registraition';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='registation' element={<Registration />} />
                    <Route path='login' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}


export default App;
