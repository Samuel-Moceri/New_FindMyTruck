// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant


const FieldSwitch = ({
  id,
  form,
  value,
  type,
  name,
  placeholder,
  onFieldSwitchChange,
  required,
  
}) => {
  const handleChange = (evt) => {
    onFieldSwitchChange(name, evt.target.value);
  };

  const inputId = `field-${name}-${placeholder}`;
  const className = `${form}-${type}-${name}`;
  const classNameLab = `${form}-${type}-${name}-label`;

  return (
    <>
      <label
        htmlFor={inputId}
        className={classNameLab}
      >
        <input
          value={value}
          onChange={handleChange}
          id={inputId}
          type={type}
          className={className}
          placeholder=""
          name={name}
        />
        {placeholder}
        

      </label>


    {/* </div> */}
    </>
  );
};

// FieldSwitch.propTypes = {
//   value: PropTypes.string,
//   type: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   onFieldContactChange: PropTypes.func.isRequired,
// };

// Valeurs par défaut pour les props
FieldSwitch.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default FieldSwitch;
