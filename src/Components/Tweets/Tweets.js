
import React from 'react'
import Tweet from '../Tweet/Tweet'

const Tweets = (props) =>{

    return(

        <div className="tweets-wrapper" style={{margin:'20px' }}>
			{ props.tweets.map(tweet => 
				<Tweet tweet={tweet} updateTweet={props.updateTweet} />
			)}
		</div>



    )
}
export default Tweets