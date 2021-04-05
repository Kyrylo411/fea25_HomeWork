import React, { Component } from 'react'
import './MyInput.scss'

export default class MyInput extends Component {
	render() {
		return (
				<label className='customLabel'>
					{this.props.name}
					<input
						className = 'customInput'
						type = {this.props.type}
						placeholder = {this.props.placeholder}
						value = {this.props.value}
					/>
				</label>
			
		)
	}
}
