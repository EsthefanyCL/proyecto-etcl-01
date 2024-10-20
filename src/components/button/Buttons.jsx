import PropTypes from 'prop-types';

const Buttons = ({ text, styleType = 'success' }) => {
  const buttonStyles = {
    classic: 'text-[#77BE4F] px-4 py-2 mt-8',
    danger: 'bg-red-500 text-white px-4 py-2 mt-4 rounded',
    success: 'bg-green-500 text-white px-4 py-2 mt-4 rounded',
    warning: 'bg-transparent-500 text-white px-4 py-2 mt-4 rounded',
    primary: 'bg-[#77BE4F] text-white px-4 py-2 mt-4 rounded',
    secondary: 'bg-gray-500 text-white px-4 py-2 mt-4 rounded',
    info: 'bg-transparent text-green-500 px-4 py-2 mt-4 hover:text-gray-300 hover:bg-transparent',
    // Añade más estilos según sea necesario
  };

  const buttonClass = buttonStyles[styleType] || 'bg-gray-300 text-black px-4 py-2 mt-4 rounded';
  
  return (
    <button type="submit" className={buttonClass}>
      <span className="text-[20px]">{text}</span>
    </button>
  );
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  styleType: PropTypes.string, // El estilo es una cadena, con múltiples posibles valores
};

export default Buttons;