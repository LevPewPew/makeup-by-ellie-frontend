import React from 'react';

function FieldLabel(props) {
  const { touched, label, error } = props;

  return (
    <label className="FieldLabel">
      {touched ? null : label}
      {
        touched &&
        (error && <span style={{ color: "red" }}>{error}</span>)
      }
      {
        touched && !error ? label : null
      }
    </label>
  )
}

export default FieldLabel;
