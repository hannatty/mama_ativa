import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import ComoDoar from "./pages/ComoDoar";
import Erro from "./pages/Erro";
import Footer from "./components/Footer";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path="/comodoar" element={<ComoDoar/>} />
        <Route  path="*" element={<Erro/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;