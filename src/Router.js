import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import ComoDoar from "./pages/ComoDoar";
import Erro from "./pages/Erro";
import Footer from "./components/Footer";
import AreaDoadora from './pages/AreaDoadora';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/quemsomos' element={<QuemSomos/>} />
        <Route  path="/comodoar" element={<ComoDoar/>} />
        <Route  path="/areadoadora" element={<AreaDoadora/>} />
        <Route  path="*" element={<Erro/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;