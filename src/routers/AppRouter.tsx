import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../views/Login/Login";
import { AuthContext } from "../context/AuthContext";
import { Page1 } from "../views/Page1/Page1";
import { Page2 } from "../views/Page2/Page2";
import { Home } from "../views/Home/Home";
import Navbar from "../components/Navbar";

const MainLayout = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/home/*" element={<Home />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
    </Routes>
  </>
);

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="Login" element={<Login />} />
      {/* Redireccion */}
      <Route path="*" element={<Navigate replace to="/home" />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      {/* Redireccion */}
    </Routes>
  );
};
