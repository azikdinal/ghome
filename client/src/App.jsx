import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
    console.log(import.meta.env.VITE_API_URL)
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
