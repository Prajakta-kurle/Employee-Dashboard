import React from 'react'

function Input({value, onChange, placeholder, disabled=false,className="", varient="primary", type="text",...props}) {
    const baseStyle="w-full px-4 py-2 rounded-lg border transition duration-200 focus:outline-none focus:ring-2 font-medium"
    const varients=
    {
        primary:"bg-white text-gray-800 border-gray-300 focus:ring-blue-500 focus:border-blue-500",
        secondary:"bg-gray-100 border-gray-200  text-gray-700 focus:ring-purple-600 focus:border-purple-500",
        error:"bg-white border-red-500 text-gray-800 focus:ring-red-500 focus:border-red:500"
    };

    const disabledStyle="opacity-50 cursor-not-allowed"
  return (
    <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    disabled={disabled}
    className={`${baseStyle} ${varients[varient]}
    ${disabled ? disabledStyle : ""} ${className}`} {...props}
    />
    
  )
}

export default Input
