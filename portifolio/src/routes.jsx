import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const APPRoutes = () => {

    return (
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default APPRoutes