import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import axios from "axios";

function App() {



    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
