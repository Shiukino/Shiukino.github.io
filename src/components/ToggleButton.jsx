import PropTypes from "prop-types";

const ToggleButton = ({ state, onClick, label }) => {
  const buttonClass = state ? "btn_complit" : "btn_incomplit";

  return (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );
};

ToggleButton.propTypes = {
  state: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default ToggleButton;
