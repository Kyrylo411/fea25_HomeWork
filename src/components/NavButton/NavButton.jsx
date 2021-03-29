import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavButton.scss'


export default function NavButton() {
	return (
		<div>
			<NavLink to='/circle'> To Circle </NavLink>
			<NavLink to='/login'> To Login Form </NavLink>
		</div>
	
	)
}