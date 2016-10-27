import React from 'react'

const Btn = ({btnEvent})=>(
	<div>
		<button
			onClick={e=>{
				e.preventDefault()
				btnEvent()
			}}
			style={{border:"none",color:"red",background:"yellow"}}
		>
		点击张贴文章
		</button>
	</div>
)
Btn.propTypes = {
	btnEvent:React.PropTypes.func.isRequired
}

export default Btn