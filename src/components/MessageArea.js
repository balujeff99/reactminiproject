import React from 'react'

class MessageArea extends React.Component{
	state={
		newMessage:""
	}
	handleFieldData=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})	
	}
	submit=()=>{
		console.log(this.state.newMessage)
		this.props.onSubmit({
			text:this.state.newMessage
		})
		this.setState({
			newMessage:""
		})
	}
	render(){
		return(
			<div>
				<input
					value={this.state.newMessage}
					placeholder="Type a Message"
					onChange={this.handleFieldData}
					name="newMessage"/>
			<button onClick={this.submit}>Submit</button>
		</div>
	)
	}

}


export default MessageArea