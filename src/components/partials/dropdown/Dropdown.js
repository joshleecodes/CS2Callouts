import React, { useState } from 'react';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1'); // Initial selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dropdown-wrapper'>
      <select className='dropdown-menu' value={selectedOption} onChange={handleOptionChange}>
        <option className='menu-option' value="Option 1"><div className='option-text'>Option 1</div></option>
        <option className='menu-option' value="Option 1"><p className='option-text'>Option 2</p></option>
      </select>
    </div>
  );
};

export default DropdownMenu;