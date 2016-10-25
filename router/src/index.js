//这个有点像node的app.js那个东西
import * as R from 'react-router'
import { render } from 'react-dom'
import * as A from './Component'
import React from 'react'

const ROOT = document.querySelector('#root')

render(
	<R.Router history={ R.hashHistory }>
		<R.Route path='father' component={A.father}>
			<R.Route path='/modle' component={A.modle}></R.Route>
			<R.Route path='/fairy' component={A.fairy}></R.Route>
			<R.Route path='home(/:id)' component={A.home}></R.Route>
		</R.Route>
		<R.Route path='/' component={A.father} onEnter={()=>{console.log('进入了root')}} onLeave={()=>{console.log('离开了root')}}>
		{/*IndexRedirect和IndexRoute不能同时出现,否则这里不会重定向*/}
			<R.IndexRedirect to="/two"></R.IndexRedirect>
		{/*规定主页的话,需要外部容器的'/'*/}
		{/*react的覆盖原则,刚才/one和/two写在上面,就被覆盖不再去找redirect的路由了*/}
			<R.Redirect from='/one' to='/two'></R.Redirect>
			<R.Route path='/one' component={A.one}></R.Route>
		{/*react的注释原来他妈的这样写啊*/}
			<R.Route path='/two' component={A.two}></R.Route>
			<R.Route path='two' component={A.two}></R.Route>
		</R.Route>
	</R.Router>,
	ROOT
)