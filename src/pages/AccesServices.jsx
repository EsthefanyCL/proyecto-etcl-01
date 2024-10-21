import imageInicio from "../assets/tienda01.jpg"
import Image from "../components/image/Images";
import Login from "../components/Login";

const AccesServices =()=> {
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
    <div className=" absolute inset-0 bg-white bg-opacity-40 justify-center mx-10 my-10 py-10">
    <Login ></Login>
    </div>
    </div>      
  </div>
  )
}

export default AccesServices