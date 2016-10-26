//生成一个留下痕迹[输入后span记录] 和时事变化[输入后span里面内容和输入框一样] 的输入框
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './components/App'

var ROOT = document.getElementById('root')

const store = createStore(reducer)

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	ROOT
)

