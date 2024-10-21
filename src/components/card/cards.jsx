import PropTypes from 'prop-types';

const Cards = ({ product, onAddToCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Imagen del producto */}
      <img className="w-full" src={product.image} alt={product.name} />

      {/* Información del producto */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Botón para comprar */}
      <div className="px-6 pt-4 pb-2">
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={() => onAddToCart(product)}>
          Comprar
        </button>
      </div>
    </div>
  );
};

Cards.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired, // Asegúrate que se pase la función
  };

export default Cards;
