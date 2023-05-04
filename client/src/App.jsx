import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import axios from "axios";

function App() {


    console.log(import.meta.env.VITE_API_URL)
    axios.get('http://localhost:5000/api/mess/message').then((res) => {
        console.log(res.data)
    })
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
