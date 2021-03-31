import React, { Component } from 'react'

export default class InputRange extends Component {
	constructor(props){
		super(props)
		this.state = {
			value : 1
		}
	}

	inputChangeHandler = (event) => {
		this.setState({
			value : event.target.value
		})
	}
	render() {
		return (
			<div>
				<input 
					type="range"
					min={1}
					max={100}
					value={this.state.value}
					onChange = {this.inputChangeHandler}

				/>
				<input 
					type="number"
					value={this.state.value}
					readOnly
				/>
			</div>
		)
	}
}
