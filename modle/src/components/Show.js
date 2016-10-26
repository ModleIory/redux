import React from 'react'

const Show = ({value})=>(
	<div>
		<strong>{value}</strong>
	</div>
)
Show.propTypes = {
	value:React.PropTypes.string.isRequired
}
export default Show
