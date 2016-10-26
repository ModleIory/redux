import React from 'react'
import Reader from '../components/Reader'
import {deal_input} from '../actions'
import { connect } from 'react-redux'

//这个方法是改变view
const mapStateToProps = (state,ownProps) =>{
	//初始的是App中的赋予的<Final getValue='ddddd'></Final>的
	//这里返回的是改变后的state了
	console.log(state)
	return {
		value:state.inputPost
	}
}

//相当于这个方法是触发值,传递值给action的,
const mapDispatchToProps = (dispatch,ownProps) => ({
	onInput:(value)=>{
			// alert('the key is ownProps.getValue : '+ownProps.getValue)
			//这个ownProps是变化的还是不变化的?
			dispatch(deal_input(value))
		}
})
		
	

const Final = connect(
	mapStateToProps,
	mapDispatchToProps
)(Reader)

export default Final