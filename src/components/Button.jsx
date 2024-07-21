import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    duration = 'duration-200',
    hover = 'hover:bg-blue-800',
    className = '',
    ...props
}) {
    return (
        <button
            className={`px-4 py-2 rounded-lg ${hover} ${duration} ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button