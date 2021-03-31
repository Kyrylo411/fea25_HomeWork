import {Switch, Route} from 'react-router-dom'
import './App.css';
import NavButton from './components/NavButton/NavButton.jsx'
import InputRange from './components/InputRange/InputRange.jsx'
import Test from './components/HomeTest/Test.jsx' 
import React, { Component } from 'react'

export default class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			value : 10,
			trigger : 15
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		if(this.state.value < this.state.trigger){
			return this.setState({
				value : this.state.value + 1
			})
		} return this.state.value
		
	}

	render() {
		return (
			<Switch>
				<Route path='/' exact component={NavButton} />
							
				<Route path='/input_range' component={InputRange} />
				<Route path='/test' render = { () => 
					<Test 
						value = {this.state.value} 
						onClick = {this.handleClick} 
						trigger = {this.state.trigger}
					/>}
				/>
			</Switch>
		)
	}
}
