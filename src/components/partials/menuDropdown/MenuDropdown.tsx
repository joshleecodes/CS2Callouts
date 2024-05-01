import React, { useState } from 'react';
import Select from 'react-select'

interface MenuDropdownProps {
  options: {value: string; label: string}[];
  updateSelection: (selection: string) => void;
}

const MenuDropdown = ({
  options,
  updateSelection
}: MenuDropdownProps) => {

  return (
    <div className='dropdown-wrapper'>
      <Select options={options}
        placeholder = "SELECT OPTION"

        onChange={(e) => {
          if(!!e)updateSelection(e.label)
          }
        }

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
            borderColor: "#F1910B"
        }),
          menuList:(provided) => ({
            ...provided,
            padding: 0,
          })
        }}
      />
    </div>
  )
}

export default MenuDropdown;