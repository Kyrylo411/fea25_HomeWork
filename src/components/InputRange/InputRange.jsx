import React, { useState } from 'react'



export default function InputRange () {

	const [range, setRange] = useState (1)

	const inputChangeHandler = (event) => {
		setRange(event.target.value)
	}


	return (
		<div>
			<input 
				type="range"
				min={1}
				max={100}
				value={range}
				onChange = {inputChangeHandler}

			/>
			<input 
				type="number"
				value={range}
				readOnly
			/>
		</div>
	)


}
