import { useNavigate } from "react-router-dom";
import Logo from "./image/Logos";
import Buttons from "./button";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <header className="flex top-0 w-full left-0 justify-between px-1 py-3 bg-gray-100">
      <div>
       <Logo></Logo>
      </div>
      <div>
        <Buttons text="Productos" styleType="info"></Buttons>
        <Buttons text="Servicios" styleType="info"></Buttons>
        <Buttons text="Contacto" styleType="info"></Buttons>
      </div>
      {isAuthenticated && <button onClick={handleLogout}>Cerrar Sesion</button>}
    </header>
  );
};

export default Header;