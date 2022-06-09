import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import ComoDoar from "./pages/ComoDoar";
import Erro from "./pages/Erro";
import Footer from "./components/Footer";
import Contato from './pages/Contato';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path="/comodoar" element={<ComoDoar/>} />
        <Route  path="*" element={<Erro/>} />
        <Route  path="/contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
