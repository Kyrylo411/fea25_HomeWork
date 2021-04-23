import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import MyInput from '..//MyInput/MyInput.jsx'
import MyButton from '..//MyButton/MyButton.jsx'
import './SignIn.scss'

export default function SignIn({history}) {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	
	const loginHandler = (e) => {
		setLogin(e.target.value)
	}
	const passHandler = (e) => {
		setPassword(e.target.value)
	}

	const formCheckHandleClick = (e) => {
		e.preventDefault()
		const localLogin = localStorage.getItem('login')
		const localPass = localStorage.getItem('password')

		if(login === localLogin && password === localPass){
			 localStorage.setItem('auth', true)
			 history.push('/')
			 alert('you are in')
		}else{
			localStorage.setItem('auth', false)
			history.push('/sign-up')
		}

	}

		return (
			<div>
				<form title='SignIn Form' className='SignIn'>
					<MyInput 
						name = 'Login' 
						type = 'text' 
						placeholder = 'enter your Login' 
						value = {login}
						onChange = {loginHandler}
					/>
					<MyInput 
						name = 'Password' 
						type = 'password' 
						placeholder = 'enter your password' 
						value = {password}
						onChange = {passHandler}
						
					/>
					<MyButton 
						value = 'Sign In'
						onClick = {formCheckHandleClick}
					/>
					
					<div className='toSignUp'>
						<p>Not registered yet?</p>
						<Link to='/sign-up'>
							Go to sign-up page
						</Link> 
					</div>
				</form>
			</div>
		)
}