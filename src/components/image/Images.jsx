import PropTypes from 'prop-types';

const Image = ({ direcionImg, description }) => {
  return (
    <div>
        <img src={direcionImg} alt= {description} className="w-full h-full object-cover" />
    </div>
  )
}
Image.propTypes = {
    direcionImg: PropTypes.string,
    description: PropTypes.string,
  };
export default Image  