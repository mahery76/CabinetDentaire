import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Docteur from "./pages/Docteur";
import Patient from "./pages/Patient";
import Layout from "./pages/Layout";
import Acte from "./pages/Acte";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout/>}>
        
          <Route path="/docteur" element={<Docteur />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/acte" element={<Acte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
