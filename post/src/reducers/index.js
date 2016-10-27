export default (state,action)=>{
	state = {
		value:'这是初始值 ',
		test:"哈哈哈哈哈哈"
	}
	switch(action.type){
		case "POST_ACTION":
			console.info(state)
			state.value += action.content
			return state
		default:
			return state
	}
}