// import React from 'react'
//也就是生成一个新额标签,然后,将dispatch和state都绑定在origin标签上,并对新标签可以传至的链接的建立
import { connect } from 'react-redux'
import { ClickPostMsg } from '../actions'
import { Input } from '../components/Input'

//这里的思想是,一个动作对应的是一个state的变动,所以,一组state,一组action
//这里的state的属性是reducers/的index里面combineReducers中的对象{}
//里面的ownProps的属性,是经过最后包装了之后的外面的属性,ownProps是链接外部的标签的属性,然后这个值,直接传到action里面
const mapStateToProps = (state,ownProps)=>{
	return {
		value:state.Input
	}
}
const mapDispatchToProp = (dispatch,ownProps) =>({
	onKeyDown:()=>{
		alert('the key is ownProps.getValue : '+ownProps.getValue)
		dispatch(ClickPostMsg(ownProps.getValue))
	}
})

const InputDeal = connect(
	mapStateToProps,
	mapDispatchToProp
)(Input)

export default InputDeal


