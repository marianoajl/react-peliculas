
import { useEffect, useState } from "react";
// import { Movies } from "./pages/Movies";
// import { MovieDetail } from "./pages/MovieDetail";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import "./App.css";

function App() {

    const url = "http://apimyac_qa.assistcard.com/Api/Home/GetTemplateSections";
    const dataToSend = {
        "Parameters":
        {
            "TemplateCode": "TechCoverageHome"
        },
        "CurrentUICulture": "es"
    };

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
            .then(response => response.json())
            .then(data => setDatos(data))
            .catch(error => console.error(error))
            .then(data => {
                setDatos(data);
                console.log("Datos actualizados:", data);
            })
    }, []);

    return (
        <div>
            {datos.map((dato) => (
                <div key={dato.id}>
                    <img src={dato.imagen} alt={dato.titulo} />
                    <h2>{dato.titulo}</h2>
                </div>
            ))}
        </div>
    );
    // <BrowserRouter>
    //     <div className='App'>
    //         <header className='App-header'>
    //             <Link to="/">
    //                 <h6 className="header-title">películas</h6>
    //             </Link>
    //         </header>
    //         <Routes>
    //             {/* componente de películas */}
    //             <Route path="/" element={<Movies/>}/>
    //             <Route path="/movie/:movieId" element={<MovieDetail/>}/>
    //         </Routes>
    //     </div>
    // </BrowserRouter >
};

export default App;
