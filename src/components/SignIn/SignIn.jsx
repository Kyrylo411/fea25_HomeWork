import React from 'react'
import {Link} from 'react-router-dom'
import MyInput from '..//MyInput/MyInput.jsx'
import MyButton from '..//MyButton/MyButton.jsx'
import './SignIn.scss'

export default function SignIn() {
		return (
			<div>
				<form title='SignIn Form' className='SignIn'>
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
						value = 'Sign In'
					/>
					<div className='toSignUp'>
						<p>Not registered yet?</p>
						<Link to='/sign-up'>
							Go to sign-up page
						</Link> 
					</div>
					
				</form>
				<Link to='/table'>To table</Link>

			</div>
		)
}
