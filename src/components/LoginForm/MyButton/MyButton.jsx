import React, { Component } from 'react'
import './MyButton.scss'

export default class MyButton extends Component {
	render() {
		return (
			<div>
				<button className='customButton'>
					{this.props.value}
				</button>
			</div>
		)
	}
}
