import React from 'react'

const MyInputs = ({ name, value, type, placeholder, onChange }) => {
    return (
        <input
            name={name}
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}
export default MyInputs;