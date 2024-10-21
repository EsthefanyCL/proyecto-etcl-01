import { useNavigate } from "react-router-dom";
import imageInicio from "../assets/tienda01.jpg"
import Image from "../components/image/Images";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[620px]"> 
      <Image direcionImg={imageInicio} description="Imagen de fondo"/>
      <div className="absolute inset-0 bg-white bg-opacity-10 items-center justify-center px-6 py-20">
        <h1> Bienvenido a </h1>
        <h3 className="text-[30px] mb-10 text-white" >Florecer</h3>
        <button type="button" onClick={() => navigate("/login")}>
          Ir a comprar
        </button>
      </div>
    </div>
  );
};

export default Welcome;
