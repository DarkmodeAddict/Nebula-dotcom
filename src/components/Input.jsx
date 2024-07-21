import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div>
            {label &&
                <label className='block mb-1' htmlFor={id}>
                    {label}
                </label>
            }
            <input
                type={type}
                className={`mt-2 px-3 py-2 rounded-lg bg-gray-950 text-white outline-none focus:bg-gray-800 duration-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input