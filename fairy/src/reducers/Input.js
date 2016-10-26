const Input = (state=1,action)=>{
	switch(action.type){
		case 'ClickPostMsg':
			state += 1
			return state
		default:
			return state
	}
}
export default Input