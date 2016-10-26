import React from 'react'
import ButtonCon from './ButtonCom'
const PostCon = ({text,event})=>(
	<div>
		<h1>点击事件仅仅触发一个dispatch,input事件可以触发多次?什么情况</h1>
		<ButtonCon event={event}></ButtonCon>
		<textarea>{text}</textarea>
	</div>
)
PostCon.propTypes = {
	text:React.PropTypes.string.isRequired,
	event:React.PropTypes.func.isRequired
}
export default PostCon