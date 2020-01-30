import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';

function DropdownListField(props) {
  const { valueField, input, placeHolder } = props;
  
  function handleChange(option) {
    let value = option;

    if (valueField) {
      value = option[valueField]
    }

    input.onChange(value);
  }
 
  return (
    <div className="DropdownFieldList">
      <DropdownList
        {...props}
        value={input.value}
        placeHolder={placeHolder} //
        onChange={handleChange}
      />
    </div>
  )
}

export default DropdownListField;