import React from 'react'

function Button({children,onClick, variant="primary", type="button"}) {
    const baseStyle=
    "px-5 py-2 rounded-lg shadow-sm transition font-medium"

    const variants=
    {
       primary:"bg-indigo-700 hover:bg-indio-800 text-white",
       secondary:"bg-indigo-500 hover:bg-indigo-600 text-white transition",
       danger:"bg-red-600 hover:bg-red-700 text-white"
    }
  return (
    <button 
    type={type}
    onClick={onClick}
    className={`${baseStyle} ${variants[variant]}`}>
      {children} {/*button name/button text*/}
    </button>
  )
}

export default Button
