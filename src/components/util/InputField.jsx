import React from 'react';

function InputField({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  );
}

export default InputField;
