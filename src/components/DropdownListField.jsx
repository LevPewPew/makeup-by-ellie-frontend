import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';

function DropdownListField(props) {
  const { valueField, input } = props;
  
  function handleChange(option) {
    let value = option;

    if (valueField) {
      value = option[valueField]
    }

    input.onChange(value);
  }
 
  return (
    <DropdownList
      {...props}
      value={input.value}
      onChange={handleChange}
    />
  )
}

export default DropdownListField;