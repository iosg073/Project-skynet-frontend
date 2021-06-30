import React from 'react'
import './Tweet.css';

const Tweet = (props) =>{
    const parsedDate = new Date(props.tweet.timestamp);
	const printDate = `${parsedDate.getMonth() + 1}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`



    return(

        <div className='tweet-wrapper'>
<div style={{margin:'20px'}}>
            <p>{props.tweet.username}</p>
            <p>{printDate}</p>
            <p>{ props.tweet.content}</p>
            <p>{props.tweet.likes}</p>
            <button onClick={()=>props.updateTweet(props.tweet.id)}>Like</button>
            </div>          

        </div>


    )
}
export default Tweet