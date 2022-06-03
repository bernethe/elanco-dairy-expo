import React from 'react'
import {GoChevronDown} from 'react-icons/go'

const SelectPlus = ({data, placeholder, icon, value, setValue}) => {
    return <label className='relative block w-full text-endeavour h-10 my-4 bg-white'>
        <select
            className={ `w-full absolute left-0 top-0 pl-10 pr-4 py-2 border border-endeavour rounded ${ (value === placeholder) ? 'text-gray' : 'text-black' } appearance-none` }
            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
            {
                data.map((item, index) => {
                    return <option key={index} value={item.id} disabled={ (item.id === placeholder) ? true : null }>{item.name}</option>
                })
            }
        </select>
        <div className='absolute left-0 top-0 h-[2.5rem] w-[2.5rem] p-2'>{icon}</div>
        <div className='absolute right-0 top-0 h-[2.5rem] w-[2.5rem] p-2'><GoChevronDown className='w-full h-full' /></div>
    </label>
}

export default SelectPlus