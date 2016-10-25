import React from 'react'
import { Link , IndexLink } from 'react-router'



//normal and peer
export const home = ({params={}})=>{
	console.log(params.id)
	return (
		<div>
			<div>此乃家是也</div>
			<strong>这是家home啊</strong>
		</div>
	)
}

export const modle = ({})=>(
	<div>
		<div>这是</div>
		<span style={{color:'red',fontWeight:'bolder'}}>MODLE</span>
	</div>
)

export const fairy = ({})=>(
	<div>
		<div>圣洁</div>
		<span style={{color:'red',fontWeight:'bolder'}}>FAIRY</span>
	</div>
)

//father and son 
export const father = ({children}) => {
	return (
		<div>
			<span>"hello this is father' header"</span>
			{children}
			<span>"hello this is father' footer"</span>
		</div>
	)
}

export const one = ({}) => {
	return (
		<div>
			<span>"hello this is ONE"</span>
		</div>
	)
}

export const two = ({}) => {
	return (
		<div>
			<span>"hello this is TWO"</span>
			<Link to='/modle'>回到modle</Link>
			<IndexLink to='/'>回到home</IndexLink>
		</div>
	)
}