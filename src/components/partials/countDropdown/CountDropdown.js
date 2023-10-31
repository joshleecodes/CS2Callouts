import React, { useState } from 'react';
import Select from 'react-select'

const options = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
]
  
export default class CalloutCountDropdown extends React.Component {
    constructor(){
    super();
    this.sendCountData = this.sendCountData.bind(this);
    }

sendCountData(e) {
    this.props.countSelectionCallBack(e.value);
}

render() {
    return (
    <div className='dropdown-wrapper'>
        <Select options={options}
        placeholder = "SELECT COUNT"

        onChange={this.sendCountData}

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