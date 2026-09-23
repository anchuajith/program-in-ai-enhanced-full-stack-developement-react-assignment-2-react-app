import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/users" element={<Users />} />


                <Route path="/users/:id" element={<User />} />

                <Route path="*" element={<NotFound />} />

            </Routes>

            <Footer/>

        </BrowserRouter>
    );
}

export default App;