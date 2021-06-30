import React, { useState } from 'react';

//App.js -> onChange -> currentTweetText // onSubmit

const CreateTweet = (props) => {
	const [ content, updateContent ] = useState("");

	const onChange = evt => {
		updateContent(evt.target.value)
	}

	return (
		<>
			<h2>Whattuh yuh waitin' fuh, write duh darn tweet!</h2>
			<form onSubmit={(evt) => props.createTweet(evt, content)}>
				<input 
					type="text" 
					maxlength="280" 
					name="content" 
					value={content}
					onChange={onChange} 
				style={{marginTop:'20px', width:'300px', height:'40px', fontSize: '20px', paddingLeft:'10px' }}/>
				<input
					type="submit"
					value="Send ya tweet ya slimy bastid"
                    style={{marginTop:'20px', width:'300px', height:'45px', fontSize: '20px', paddingLeft:'10px' }}
				/>
			</form>
		</>
	)
}

export default CreateTweet;