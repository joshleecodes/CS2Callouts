import React, { useState } from 'react';
import Select from 'react-select'

const options = [
  { value: 'Ascent', label: 'ASCENT' },
  { value: 'Bind', label: 'BIND' },
  { value: 'Breeze', label: 'BREEZE' },
  { value: 'Haven', label: 'HAVEN' },
  { value: 'Lotus', label: 'LOTUS' },
  { value: 'Split', label: 'SPLIT' },
  { value: 'Sunset', label: 'SUNSET' },
]

  export default class MapDropdown extends React.Component {
    constructor(){
      super();
      this.sendMapData = this.sendMapData.bind(this);
    }

  sendMapData(e) {
    this.props.mapSelectionCallBack(e.label);
  }

  render() {
    return (
      <div className='dropdown-wrapper'>
        <Select options={options}
          placeholder = "SELECT MAP"

          onChange={this.sendMapData}
  
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: '12vw',
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