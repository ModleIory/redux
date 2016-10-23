import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,onTodoClick})=>(
	<ul>
		{todos.map(todo=>(
			<Todo key={todo.id}   {...todo} 	onClick={()=>onTodoClick(todo.id)}>
			</Todo>
		))}
	</ul>
)
TodoList.propTypes = {
		//一个数组
	todos:React.PropTypes.arrayOf(
		//只能是这种形式的数组类型,特性形状,按照这个形状来
		React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		completed: React.PropTypes.bool.isRequired,
		text: React.PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick:React.PropTypes.func.isRequired

}

export default TodoList