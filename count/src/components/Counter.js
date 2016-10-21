import React , { Component , PropTypes  } from 'react'

class Counter extends Component{
	constructor(){
		super()
		console.log('counter is initial.....')
		this.state={}
		//限制標籤屬性的類型限制,这种写发不推荐,因为warn要用static,但是那是es7上的草案,暂时这样吧反正也不报错
		this.propTypes = {
			value:React.PropTypes.object.isRequired,	
			onIncrement:PropTypes.func.isRequired,
			onDecrement:PropTypes.func.isRequired
		}
		//默認的標籤屬性
		this.defaultProps = {
			value:0,
			onIncrement(){},
			onDecrement(){}
		}
	}
	incrementIfOdd(){
		if(this.props.value.count%2==0){
			this.props.onIncrement()
		}
	}
	incrementIfAsync(){
		setTimeout(this.props.onIncrement,1000)
	}
	render(){
		const {value,onIncrement,onDecrement} = this.props
		//這種代碼誤人子弟,+=直接給人懵逼,實際上就是字符,{' '}實際只是空格在站位
		return (
			<p>
				Clicked: {value.count} times
			         {' '}
			        <button onClick={onIncrement}>
			          +
			        </button>
			        {' '}
			        <button onClick={onDecrement}>
			          -
			        </button>
			        {' '}
			        <button onClick={this.incrementIfOdd.bind(this)}>
			          Increment if odd
			        </button>
			        {' '}
			        <button onClick={this.incrementIfAsync.bind(this)}>
			          Increment async
			        </button>
			</p>
		)
	}
}

export default Counter

