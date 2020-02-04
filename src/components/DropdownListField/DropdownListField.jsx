import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import './DropdownListField.scss';

function DropdownListField(props) {
  const { valueField, input } = props;
  
  function handleChange(option) {
    let value = option;

    if (valueField) {
      value = option[valueField];
    }

    input.onChange(value);
  }
 
  return (
    <div className="DropdownListField">
      <DropdownList
        {...props}
        value={input.value}
        onChange={handleChange}
      />
    </div>
  );
}

export default DropdownListField;
