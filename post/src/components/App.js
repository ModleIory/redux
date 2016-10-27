import React from 'react'
import Btn from './Btn'
import Poster from './Poster'


class App extends React.Component{
	handBtnSelf(){
		let value = this.refs.input.value
		this.props.handBtn(value)
		this.refs.input.value=''
	}
	render(){
		const {handBtn,value} = this.props
		return (
			<div>
				<input type='text' ref='input'  placeholder='哈哈哈哈'/>
				<Btn btnEvent={this.handBtnSelf.bind(this)}/>
				<Poster value={this.props.value}/>
			</div>
		)
	}
} 
export default App