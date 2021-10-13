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

  const inputId = `field-${name}`;
  const className = `${form}-${type}-${name}`;
  const classNameLab = `${form}-${type}-${name}-label`;

  return (
    // <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
    <>
      {/* <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className={className}
        placeholder=""

        // placeholder="{placeholder}
        name={name}
      /> */}

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
