import PropTypes from "prop-types";

const Items = ({ imgSrc, altText, quantity }) => (
  <div className="items">
    <img src={imgSrc} alt={altText} />
    <p>{quantity}</p>
  </div>
);

Items.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Items;
