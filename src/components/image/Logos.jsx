import imagenLogo from "../../assets/LogoTienda.png"

const Logo = () => {
    return (
        <div  >
          <img src={imagenLogo} alt="Descripción de la imagen" className="logo"/>
        </div>
      );
  };
  
export default Logo;