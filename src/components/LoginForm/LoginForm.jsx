import React, { Component } from 'react'
import MyInput from './MyInput/MyInput'
import MyButton from './MyButton/MyButton'
import './LoginForm.scss'

export default class LoginForm extends Component {
	render() {
		return (
			<div>
				 
				<form title='Login Form' className='loginForm'>
					<MyInput 
						name = 'Email' 
						type = 'email' 
						placeholder = 'enter your email' 
					/>
					<MyInput 
						name = 'Login' 
						type = 'text' 
						placeholder = 'enter your Login' 
					/>
					<MyInput 
						name = 'Password' 
						type = 'password' 
						placeholder = 'enter your password' 
					/>
					<MyButton 
						value = 'Sign Up'
					/>
				
				
				</form>
			
			</div>
		)
	}
}
