import Cards from "../components/card/cards";
import { useEffect, useState } from 'react';
import Checkout from "../components/SaleDetails";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  // Función para agregar productos al carrito
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Agrega el producto al carrito
    console.log('Producto agregado al carrito:', product); // Opcional: ver el producto en la consola
  };
  const handleClearCart = () => {
    setCart([]);
  };
  return (
    <div className="flex pt-4 ">
      <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <Cards 
          key={product.id} 
          product={{ 
            name: product.title,
            price: product.price, 
            image: product.image 
          }}
          onAddToCart={handleAddToCart}
        />
      ))}
      </div>
      <div>
      <div className="mt-8">
        {/* Mostrar el componente Checkout si hay productos en el carrito */}
      {cart.length > 0 && (
        <div className="mt-8">
          <Checkout cart={cart} onClearCart={handleClearCart} />
        </div>
      )}
      </div>
      </div>
      
    </div>
    
  );
};

export default ProductPage;
