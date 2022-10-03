import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Featured from "./components/businessesDisplay/Featured";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </>
  );
}

export default App;
