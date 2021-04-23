import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './MainPage.scss'


export default function MainPage() {

	useEffect(()=>{
		if(localStorage.getItem('auth')){
			return localStorage.getItem('auth')
		}else{
			localStorage.setItem('auth', false)
		}
	},[])

	const auth = JSON.parse(localStorage.getItem('auth'))

	return (
		<div className='MainPage'>
			<Link to='/input-range'> To range input page </Link>
			<Link to='/sign-in'> Sign In </Link>
			<Link to='/sign-up'> Sign Up </Link>
			{auth && <Link to='/logged-in-page'> Content </Link>}
		</div>
	)
}
