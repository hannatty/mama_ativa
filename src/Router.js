import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthService from "./services/authService";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";
import BoardUser from "./components/Boards/boardUserComponent";
import BoardModerator from "./components/Boards/boardModeratorComponent";
import BoardAdmin from "./components/Boards/boardAdminComponent";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import AreaDoadora from "./pages/AreaDoadora";
import ComoDoar from "./pages/ComoDoar";
import MinhasDoacoes from "./pages/Doacao/MinhasDoacoes";
import AreaInfantil from "./pages/AreaInfantil";
import Erro from "./pages/Erro";
import Footer from "./components//Layout/Footer";
import Contato from "./pages/Contato";
import ResponseContact from "./pages/Contato/ResponseContact";
import Bank from "./pages/Doacao/Banco/Banco";
import ListBank from "./pages/Doacao/Banco/Lista";

const Router = () => {
 const [showModeratorBoard, setShowModeratorBoard] = useState(false);
 const [showAdminBoard, setShowAdminBoard] = useState(false);
 const [currentUser, setCurrentUser] = useState(undefined);

 useEffect(() => {
  const user = AuthService.getCurrentUser();

  if (user) {
   setCurrentUser(user);
   setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
   setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  }
 }, []);

 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/user" element={<BoardUser />} />
    <Route path="/mod" element={<BoardModerator />} />
    <Route path="/admin" element={<BoardAdmin />} />
    <Route path="/quemsomos" element={<QuemSomos />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/mensagemenviada" element={<ResponseContact />} />
    <Route path="/areadoadora" element={<AreaDoadora />} />
    <Route path="/areainfantil" element={<AreaInfantil />} />
    <Route path="/minhasdoacoes" element={<MinhasDoacoes />} />
    <Route path="/comodoar" element={<ComoDoar />} />
    <Route path="/banco" element={<Bank />} />
    <Route path="/lista" element={<ListBank />} />
    <Route path="*" element={<Erro />} />
   </Routes>
   <Footer />
  </BrowserRouter>
 );
};

export default Router;
