import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import AreaDoadora from "./pages/AreaDoadora";
import ComoDoar from "./pages/ComoDoar";
import MinhasDoacoes from "./pages/MinhasDoacoes";
import AreaInfantil from "./pages/AreaInfantil";
import Erro from "./pages/Erro";
import Footer from "./components/Footer";
import Contato from "./pages/Contato";
import ResponseContact from "./pages/Contato/ResponseContact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/mensagemenviada" element={<ResponseContact />} />
        <Route path="/areadoadora" element={<AreaDoadora />} />
        <Route path="/areainfantil" element={<AreaInfantil />} />
        <Route path="/minhasdoacoes" element={<MinhasDoacoes />} />
        <Route path="/comodoar" element={<ComoDoar />} />
        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
