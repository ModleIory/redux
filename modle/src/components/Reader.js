import React from 'react'
import Show from './Show'

class Reader extends React.Component{
	constructor(){
		super()
		this.propTypes = {
			value:React.PropTypes.string.isRequired,
			onInput:React.PropTypes.func.isRequired
		}
	}
	dealInput(){
		console.log(this.refs.input)
		console.log(this.refs.input.value+" in input")
		this.props.onInput(this.refs.input.value)
	}
	render(){
		return (
			<div>
				<h1>数据分开时候的测试</h1>
				<input 
				 	type='text' 
				 	onInput={this.dealInput.bind(this)} 
				 	value={this.props.value}
				 	ref="input"
				 />
				 <Show value={this.props.value}></Show>
			</div>
		)
	}
}
export default Reader