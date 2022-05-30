import React from 'react';

const InputPlus = ({placeholder, icon, value, setValue}) => {
    return <label className='relative block w-full text-endeavour h-10 my-4'>
        <input
            type='text'
            placeholder={placeholder}
            className='w-full absolute left-0 top-0 pl-10 pr-4 py-2 border border-endeavour rounded text-black'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <div className='absolute left-0 top-0 h-[2.5rem] w-[2.5rem] p-2'>{icon}</div>
    </label>
}

export default InputPlus