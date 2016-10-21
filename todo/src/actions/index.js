//this is action
let nextTodeId = 0

//function(text){return {obj}}返回个对象
export const addTodo = (text)=>({
	type:"ADD_TODO",
	id:nextTodeId++,
	text
})

export const setVisibilityFilter = (filter)=>({
	type:"SET_VISIBILITY_FILTER",
	filter
})

export const toggleTodo = (id) =>({
	type:'TOGGLE_TODO',
	id
})