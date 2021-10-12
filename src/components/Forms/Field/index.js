// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  form,
  value,
  type,
  name,
  placeholder,
  onFieldChange,
  required
}) => {
  const handleChange = (evt) => {
    onFieldChange(name, evt.target.value);
  };

  // console.log(name, value);

  const inputId = `field-${name}`;
  const className = `${form}-${type}-${name}`;
  const classNameLab = `${form}-${type}-${name}-label`;

  return (
    // <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
    //   <input
    //     // React - state
    //     value={value}
    //     onChange={handleChange}
    //     // infos de base
    //     id={inputId}
    //     type={type}
    //     className={className}
    //     placeholder=""

    //     // placeholder="{placeholder}
    //     name={name}
    //   />

    //   <label
    //     htmlFor={inputId}
    //     className={classNameLab}
    //   >
    //     {placeholder}
    //   </label>
    // </div>

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
        checked 
        required
      />
      <label
        htmlFor={inputId}
        className={classNameLab}
      >
      {placeholder}
      </label>
    </div>
    </>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
};

// == Export
export default Field;
