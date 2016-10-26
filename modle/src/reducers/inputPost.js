
export const inputPost = (state="input post",action) => {
	switch(action.type){
		case "DEAL_INPUT":
			state=action.value
			return state
		default:
			return state

	}
}