import React ,{PropTypes} from 'react'

const Todo = ({onClick,completed,text})=>(
	<li
		onClick={onClick}
		style={{textDecoration:completed?'line-through':'none'}}
	>
	{text}
	</li>
)
Todo.propTypes = {
	onClick:React.PropTypes.func.isRequired,
	completed:PropTypes.bool.isRequired,
	text:React.PropTypes.string.isRequired
}

export default Todo