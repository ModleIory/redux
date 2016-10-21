import React from 'react'
import FilterLink from '../containers/FilterLink'

//FilterLink直接变成组件了.... 通过connect链接以后
const Footer = ()=>(
	<p>
		Show:
		{"  "}
		<FilterLink filter='SHOW_ALL'>ALL</FilterLink>
		{", "}
		<FilterLink filter='SHOW_ACTIVE'>ACTIVE</FilterLink>
		{", "}
		<FilterLink filter='SHOW_COMPLETED'>COMPLETED</FilterLink>
	</p>
)

export default Footer
