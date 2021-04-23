import React from 'react'
import './MyButton.scss'

export default function MyButton({value, onClick}){
	return(
		<div>
			<button 
				className='customButton'
				onClick={onClick}
				>
				{value}
			</button>
		</div>
	)
}