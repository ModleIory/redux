import React,{ PropTypes } from 'react'
//仅仅规定一个链接组件么,如果active的,那么就是一个span不可以再点击了,如果不是active的,那么,可以点击
//用const而且没有createClass也可以规定组件...
const Link = ({active,children,onClick})=>{
	if(active){
		return (
			<span>{children}</span>
		)
	}

	return (
		<a href='#' onClick={
			(e)=>{
				e.preventDefault()
				onClick()
			}
		} >
		</a>
	)
}
Link.propTypes = {
	active:PropTypes.bool.isRequired,
	children:React.PropTypes.node.isRequired,
	onClick:PropTypes.func.isRequired	
}

export default Link