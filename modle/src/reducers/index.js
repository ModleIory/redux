import {inputPost} from './inputPost'
import {postPost} from './postPost'
import { combineReducers } from 'redux'


const Temp = combineReducers({
	inputPost,
	postPost
})

export default Temp