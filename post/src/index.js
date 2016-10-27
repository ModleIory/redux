import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import reduce from './reducers'
import App from './components/App'
import * as actions from './actions'

const root =document.getElementById('root')

const store = createStore(reduce)

let renderDOM = ()=>render(
	<App 
		handBtn={(value)=>{store.dispatch(actions.POST_ACTION(value))}}  
		value={store.getState().value} 
	/>,
	root
)
renderDOM()
store.subscribe(renderDOM)
