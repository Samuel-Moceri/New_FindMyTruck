// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const ContactField = ({
  form,
  value,
  type,
  name,
  placeholder,
  onFieldContactChange,
  required,
  
}) => {
  const handleChange = (evt) => {
    onFieldContactChange(name, evt.target.value);
  };

  const inputId = `field-${name}`;
  const className = `${form}-${type}-${name}`;
  const classNameLab = `${form}-${type}-${name}-label`;


  return (
    <>
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input 
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className={className}
        placeholder=""
        name={name}
        required 
      />
      <label
        htmlFor={placeholder}
        htmlFor={inputId}
        className={classNameLab}
      >
      {placeholder}
      </label>
    </div>
    </>
  );
};

ContactField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onFieldContactChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
ContactField.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default ContactField;
