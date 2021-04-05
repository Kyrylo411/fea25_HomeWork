import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {data} from './data.jsx'
import './Table.scss'

export default class Table extends Component {

tableFill(){
	return data.map(({name, lasName, id}, index)=>{
		return (
			<tr key={index+id}><td>{name}</td><td>{lasName}</td></tr>
		)
	})
}
	render() {
		return (
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th>Name</th>
							<th>LastName</th>
						</tr>
					</thead>
					<tbody>
						{this.tableFill()}
					</tbody>
				</table>

				<Link to='/'>To Sign In form</Link>
			</div>
		)
	}
}