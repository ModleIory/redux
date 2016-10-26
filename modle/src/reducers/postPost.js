
export const postPost = (state='mmm',action) => {
	switch(action.type){
		case "DEAL_POST":
			state=action.text+action.text
			console.log('reduce 中的 '+state)
			return state
		default:
			return state

	}
}