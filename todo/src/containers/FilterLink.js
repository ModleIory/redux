//用react-redux的connect把你看,把state化为组件的一部分,吧dispatch也化作组件的props 看名字就知道了嘛
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state,ownProps)=>({
	//组件中的名字	
	active:ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch,ownProps)=>({
	//组件中的名字
	onClick:()=>{
		dispatch(setVisibilityFilter(ownProps.filter))
	}
})

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)//组件的文件	

export default FilterLink