import PostCon from '../components/PostCon'
import { connect } from 'react-redux'
import React from 'react'
import { deal_post } from '../actions'

const mapStateToProps = (state,selfProps) =>({
	text:state.postPost
})

const mapDispatchToProps = (dispatch,selfProps) =>({
		event:(e)=>{
			console.log("connect里面的输出"+e.target.innerHTML)
			dispatch(deal_post(e.target.innerHTML))
		}
})

const postPost  = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostCon)

export default postPost
