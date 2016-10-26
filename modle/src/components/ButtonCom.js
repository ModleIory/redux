import React from 'react'

const ButtonCon = ({event}) =>(
	<div>
		<button
			type='button' 
			onClick={e=>{
				console.log('button is clicking 在组件处')
				event(e)
			}}
		>点击了看看</button>
	</div>
)
ButtonCon.propTypes = {
	event:React.PropTypes.func.isRequired
}
export default ButtonCon