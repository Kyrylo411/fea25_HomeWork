import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MyInput from '..//MyInput/MyInput.jsx'
import MyButton from '..//MyButton/MyButton.jsx'
import './SignUp.scss'

export default function SignUp({history}){

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [checkPassword, setCheckPassword] = useState('')

	const loginHandleInput = (e) => {
		setLogin(e.target.value)
	}

	const passHandleInput = (e) => {
		setPassword(e.target.value)
	}

	const handleCheckPassword = (e) => {
		setCheckPassword(e.target.value)
	}

	const formHandleClick = (e) => {
		e.preventDefault()
		if(password === checkPassword && login && password){
			localStorage.setItem('login', login)
			localStorage.setItem('password', password)
			history.push('/sign-in')
		}
		if (password !== checkPassword || !login || !password) {
			alert('Проверьте введенные данные!')
		}
	}

	return(
		<form title='SignUp Form' className='SignUp'>
			<MyInput 
				name = 'Login' 
				type = 'text' 
				placeholder = 'enter your Login' 
				value={login}
				onChange={loginHandleInput}
			/>
			<MyInput 
				name = 'Password' 
				type = 'password' 
				placeholder = 'enter your password' 
				value={password}
				onChange = {passHandleInput}
			/>
			<MyInput 
				name = 'Password' 
				type = 'password' 
				placeholder = 'confirm your password' 
				value={checkPassword}
				onChange = {handleCheckPassword}
			/>
			<MyButton
				value = 'Sign Up'
				onClick = {formHandleClick}
			/>

			<div className='toSignIn'>
				<p>Registered already?</p>
				<Link to='/sign-in'>
					Go to sign-in page
				</Link> 
			</div>
		</form>
	)
}
