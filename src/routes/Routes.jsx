import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeUser from "../pages/HomeUser";
import Itens from "../pages/Itens";
import Navbar from "../componentes/Navbar";
import RegisterFunc from "../pages/RegisterFunc";
import LoginFunc from "../pages/LoginFunc";
import HomeFunc from "../pages/HomeFunc";
const RouterApp = () => {
  return (
      
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registerPage" element={<Register />} />
      <Route path="/loginPage" element={<Login />} />
      <Route path="/homeUser" element={<HomeUser />} />
      <Route path="/itens" element={<Itens />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/loginFunc" element={<LoginFunc />} />
      <Route path="/registerFunc" element={<RegisterFunc/>} />
      <Route path="/homeFunc" element={<HomeFunc/>} />
      
    </Routes>
  </Router>
  )
}

export default RouterApp