import { Movies } from "./pages/Movies";
import { MovieDetail } from "./pages/MovieDetail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <header className='App-header'>
                    <Link to="/">
                        <h6 className="header-title">películas</h6>
                    </Link>
                </header>
                <Routes>
                    {/* componente de películas */}
                    <Route path="/" element={<Movies/>}/>
                    <Route path="/movie/:movieId" element={<MovieDetail/>}/>
                </Routes>
            </div>
        </BrowserRouter >
    );
}

export default App;
