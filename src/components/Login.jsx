import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageInicio from "../assets/tienda01.jpg"
import Image from "../components/image/Images";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "admin" && password === "admin") {
      navigate("/dashboard");
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Campos incorrectos");
    }
  };
  return (
    <div className="flex w-full justify-between">
      <div className="w-[700px] text-left justify-center mx-10 my-10">
        <h2>En Florecer, ofrecemos una amplia variedad de productos de alta calidad,
            seleccionados cuidadosamente para satisfacer tus necesidades.
        </h2>
        <br />
        <h2 className="text-xl font-bold mb-4">Por qué elegirnos:</h2>
        
        <ul className="list-disc list-inside text-align-right">
          <li>Calidad garantizada: Solo ofrecemos productos con altos estándares.</li>
          <li>Precios competitivos: Excelente relación calidad-precio.</li>
          <li>Atención personalizada: Te acompañamos durante todo el proceso de compra.</li>
        </ul>      
      </div>
      
      <div className="relative w-[700px]">
      <Image direcionImg={imageInicio} description="Imagen de fondo"/>
      <div className=" absolute inset-0 bg-white bg-opacity-60 items-center justify-center mx-10 my-10">
      <h1 className="text-[32px] mb-6 text-white">Login</h1>
      <form action="login" onSubmit={handleSubmit}>
        <label className="mb-[4px] block">
          Username:&nbsp;&nbsp;
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3"
          />
        </label>
        <br />
        <label htmlFor="">
          Password:&nbsp;&nbsp;
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3"
          />
        </label>
        <br />
        <br />
        <button type="submit">Iniciar </button>
      </form>
      </div>
      </div>      
    </div>
  );
};

export default Login;
