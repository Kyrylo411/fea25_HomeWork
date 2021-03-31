import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavButton.scss'


export default function NavButton() {
	return (
		<div>
			<NavLink to='/input_range'> To InputRange </NavLink>
			<NavLink to='/test'> To Test </NavLink>
		</div>
	
	)
}