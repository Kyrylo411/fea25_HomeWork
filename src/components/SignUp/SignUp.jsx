import React from 'react'
import {Link} from 'react-router-dom'
import MyInput from '..//MyInput/MyInput.jsx'
import MyButton from '..//MyButton/MyButton.jsx'
import './SignUp.scss'

export default function SignUp(){
	return(
		<div>
				 
				<form title='SignUp Form' className='SignUp'>
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
					<div className='toSignIn'>
						<p>Registered already?</p>
						<Link to='/'>
							Go to sign-in page
						</Link> 
					</div>
				</form>
				<Link to='/table'>To table</Link>
			
			</div>
	)
}