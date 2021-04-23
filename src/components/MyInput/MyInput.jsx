import React from 'react'
import './MyInput.scss'

const MyInput = ({name,type,placeholder,value, onChange})=>{
	return(
		<label className='customLabel'>
			{name}
			<input
				className = 'customInput'
				type = {type}
				placeholder = {placeholder}
				value = {value}
				onChange = {onChange}
				
			/>
		</label>
	)
}
export default MyInput