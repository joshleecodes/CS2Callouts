import React, { useState } from 'react';
import Select from 'react-select'

const options = [
  { value: 'Ancient', label: 'ANCIENT' },
  { value: 'Anubis', label: 'ANUBIS' },
  { value: 'Dust2', label: 'DUST2' },
  { value: 'Inferno', label: 'INFERNO' },
  { value: 'Mirage', label: 'MIRAGE' },
  { value: 'Nuke', label: 'NUKE' },
  { value: 'Overpass', label: 'OVERPASS' },
  { value: 'Vertigo', label: 'VERTIGO' },
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
                fill: "#F1910B"
              }
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#F1910B" : "#ECE8E1",
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