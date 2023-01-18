import React from 'react'
import MessageArea from './MessageArea'
class MessageStorage extends React.Component{
	addMessage=(currentMessage)=>{
		console.log(currentMessage)
	}
render(){
	return(
		<div>
			<MessageArea onSubmit={this.addMessage}/>
		</div>
	)

}

}
export default MessageStorage