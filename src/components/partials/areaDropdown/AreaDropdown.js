import React, { useState } from 'react';
import Select from 'react-select'



export default class AreaDropdownMenu extends React.Component { 
  
  
  
  render() {
    return (
      <div className='dropdown-wrapper'>
        <Select id='area-dropdown' options={this.props.options} 
          placeholder = "SELECT AREA"
  
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: '19vw',
              border: 0,
              boxShadow: 'none',
              backgroundColor: '#ECE8E1',
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              "svg": {
                fill: "#FF4655"
              }
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#FF4655" : "#ECE8E1",
              borderColor: "#ECE8E1"
            }),
            menuList:(provided) => ({
              ...provided,
              padding: 0,
            })
          }}
        />
      </div>
    );
  }
  
};