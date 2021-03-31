import React, { Component } from 'react'

export default class Test extends Component {
	constructor(props){
		super(props)
		this.state = {
			value : 0
		}
	}
	static getDerivedStateFromProps(props, state){
		if(state.value !== props.value){
			return {
				value : props.value
			}
		}	return null
	}

	render() {
		return (
			<div>
				<input
					type = "number"
					trigger = {this.props.trigger}
					value = {this.state.value}
					max = {15}
					readOnly
				/>
				<button
					onClick = {this.props.onClick}
				>Add+1</button>
			</div>
		)
	}
}
