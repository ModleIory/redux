 //reducer就是处理分发过来的action的
 export default (state={count : 2,haha : 'this is haha'},action)=>{
 	switch(action.type){
 		case 'INCREMENT':
 			state.count = state.count+1
 			console.log(state)
 			return state
 		case 'DECREMENT':
 			state.count = state.count-1
 			return state
 		default:
 			return state
 	}
 }