import React from 'react'

export const Input = ({value,onKeyDown})=>(
	<div>
		<input type='text' value={value}   onClick={onKeyDown}/>
	</div>
)
Input.propTypes = {
	value:React.PropTypes.number,
	onKeyDown:React.PropTypes.func.isRequired
}