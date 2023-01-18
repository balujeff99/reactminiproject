import React from 'react'

class MessageDisplay extends React.Component{
render(){
	return(
		<div>
			<p>{this.props.message}</p>
		</div>
	)

}

}
export default MessageDisplay