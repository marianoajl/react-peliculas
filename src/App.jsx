import { MoviesGrid } from "./components/MoviesGrid";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"; 
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
                    <Route path="/" element={<MoviesGrid />}/>
                    <Route path="/movie" element="otra vista"/>
                </Routes>
            </div>
        </BrowserRouter >
    );
}

export default App;
