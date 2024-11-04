import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Ghins from "./pages/Ghins";
import Contact from "./pages/Contact";
import Gouvernance from "./pages/Gouvernance";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="Ghins" element={<Ghins/>}/>
                    <Route path="Contact" element={<Contact/>}/>
                    <Route path="Gouvernance" element={<Gouvernance/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));