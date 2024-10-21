import { useState } from 'react';
import PropTypes from 'prop-types';

const PaymentPage = ({ onConfirm }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar la información de pago a tu API
    // Por ejemplo, con fetch o axios
    onConfirm(); // Llama a la función de confirmación
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Datos de Pago</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nombre:</label>
        <input
          type="text"
          name="name"
          value={paymentInfo.name}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Dirección:</label>
        <input
          type="text"
          name="address"
          value={paymentInfo.address}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Número de Tarjeta:</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Fecha de Expiración:</label>
        <input
          type="text"
          name="expiry"
          value={paymentInfo.expiry}
          onChange={handleChange}
          className="border rounded w-full p-2"
          placeholder="MM/AA"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">CVV:</label>
        <input
          type="text"
          name="cvv"
          value={paymentInfo.cvv}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Confirmar Pago
      </button>
    </form>
  );
};

PaymentPage.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default PaymentPage;
