import React from 'react';
import './Profile.css';
import Tweets from '../Tweets/Tweets';

const Profile = (props) => {
	if (props.user) {
		const userLikedTweets = props.tweets.filter(tweet =>
			props.user.likedTweets.includes(tweet.id) && tweet	
		)

		return (
			<div className="profile-wrapper">
				<div>
					<img src={props.user.photo_url} alt="user" width='300' height='350'/>
					<div style={{marginLeft:'60px',borderLeft:'solid 2px', padding:'20px'}}>
						<p style={{fontWeight:'bolder'}}>{props.user.username} :</p>
						<p>{props.user.bio}</p>
					</div>
				</div>
				<Tweets tweets={userLikedTweets} updateTweet={props.updateTweet} />
			</div>
		)
	} else {
		return <div></div>
	}
}

export default Profile;

/*
      user: {
        id: '123456',
        username: 'CRHarding',
        bio: 'Lorem ipsum dolor sit amet...',
        likedTweets: [],
        photoUrl: 'https://assets.fanart.tv/fanart/movies/280/moviebackground/terminator-2-judgment-day-5c37b3ff682f3.jpg',
        location: {}
      },
*/