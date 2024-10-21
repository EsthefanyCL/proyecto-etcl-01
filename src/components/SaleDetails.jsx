import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/sale', { state: { cart } }); // Pasa el carrito a pago
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Confirmar Compra</h2>
      <div className="mb-4">
        <h3 className="text-xl">Productos en el carrito:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="font-bold">Total:</h4>
        <span>
          ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </span>
      </div>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handlePayment}
      >
        Ir a Datos de Pago
      </button>
    </div>
  );
};

Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
  onClearCart: PropTypes.func.isRequired,
};

export default Checkout;
