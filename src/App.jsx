import { Movies } from "./components/Movies";
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
                    <Route path="/movie/:movieid" element="otra vista"/>
                </Routes>
            </div>
        </BrowserRouter >
    );
}

export default App;
