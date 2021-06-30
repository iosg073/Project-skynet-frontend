import React, { Component } from 'react';
import './App.css';

import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios'

/*
  Route -> Listens to the url, and based on the url renders a component with applicable router props
    <Route path="/about" component={About} />
    <Route path="/about" render={() => <About user={this.state.user} /> } />
  Link -> Directs to a url, sends the browser to a url
    become an a tag
*/

import Profile from './Components/Profile/Profile';
import Tweets from './Components/Tweets/Tweets';
import CreateTweet from './Components/CreateTweet/CreateTweet';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      tweets: []
    }
  }

  async componentDidMount() {

    const users =await axios ('http://localhost:8000')

    const collectedUser={ id: users.data[0].pk, ...users.data[0].fields};

    const tweets = await axios (`http://localhost:8000/profile/tweets/${collectedUser.id}`);
    console.log(tweets);

    const collectedTweets =tweets.data.map( tweet => {
      const collectedTweet ={ id: tweet.pk, ...tweet.fields}
      return collectedTweet
    })
    console.log(collectedTweets)

    // console.log(collectedUser)
    // collectedUser.id=users.data[0].pk;
    // collectedUser.photo_url=users.data[0].fields['photo_url']
    // console.log(users);

   




    this.setState({
      // user:users.data[0].fields

      user:collectedUser,
      tweets:collectedTweets

    })


    // this.setState({
    //   user: {
    //     id: '123456',
    //     username: 'Waheed Alam',
    //     bio: ' Amet anim cupidatat deserunt esse aliqua. Eu amet fugiat Lorem mollit dolor amet ea fugiat. Commodo elit est ipsum magna est veniam ea ullamco. Duis consequat cillum elit labore labore cillum do magna commodo incididunt mollit et cupidatat. Cillum velit ex nostrud laboris esse occaecat esse elit amet est. Aute id labore incididunt culpa velit in sunt voluptate. Proident enim qui aliquip adipisicing minim ipsum excepteur laboris.',
    //     likedTweets:[],
    //     photoUrl:'https://joeschmoe.io/api/v1/Kumar',
    //     location: {}
    //   },
    //   tweets: [
    //     {
    //       timestamp: Date.now(),
    //       id: '123456',
    //       userId: '123456',
    //       content: "My tweet brings all of the boys to the yard.",
    //       likes: 0
    //     },
    //     {
    //       timestamp: Date.now(),
    //       id: '999999',
    //       userId: '123456',
    //       content: "My tweet brings all of the salami to the yard.",
    //       likes: 0
    //     }
    //   ]
    // })
  }

  updateTweet = id => {
    // Check to see if the tweet is in the users likedTweets array
    // If so, remove it and subtract one from tweet likes, if not add it and add one to tweet likes

    const likedTweet = axios (`http://localhost:8000/tweets/${id}/${this.state.user.id}`)


    // const foundTweet = this.state.user.likedTweets.find(tweet => tweet === id)
    // const tweet = this.state.tweets.find(tweet => tweet.id === id)
    // const user = this.state.user;

    // if (!foundTweet) {
    //   user.likedTweets.push(id);
    //   tweet.likes += 1;
    // } else {
    //   user.likedTweets.splice(user.likedTweets.indexOf(id), 1);
    //   tweet.likes -= 1;
    // }

    // const updatedTweets = this.state.tweets.map(oneTweet => {
    //   return oneTweet.id === id ? tweet : oneTweet
    //   // if (oneTweet.id === id) {
    //   //   return tweet
    //   // } else {
    //   //   return oneTweet
    //   // }
    // })

    // this.setState({
    //   tweets: updatedTweets,
    //   user: user
    // })
  }

  createTweet = async (evt, tweetContent) => {
    evt.preventDefault();
    const newTweet = {}
    newTweet.id = Math.floor(Math.random() * 10000)
    newTweet.timestamp = Date.now();
    newTweet.likes = 0;
    newTweet.userId = '123456';
    newTweet.content = tweetContent;

    console.log(newTweet);
    const tweets = this.state.tweets;
    tweets.push(newTweet);

    this.setState({
      tweets: tweets
    })

    this.props.history.push('/tweets');
  }

  render() {
    return (
      <div className="App">
        <header style={{backgroundColor:'#22b4b4', padding:'1px', marginBottom:'50px'}}>
          <nav>
            <ul>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/tweets">Tweets</Link></li>
              <li><Link to="/tweets/new">Add Tweet</Link></li>
            </ul>
          </nav>
        </header>
        <h1>Welcome to <Link to="/"><span style={{color:'#22b4b0', fontStyle:'italic'}}>Project Skynet</span></Link></h1>
        <Route path="/profile" render={() =>  
          <Profile 
            user={this.state.user} 
            tweets={this.state.tweets}
            updateTweet={this.updateTweet}
          /> 
        }/>
        <Route exact path="/tweets" render={() =>
          <Tweets tweets={this.state.tweets} updateTweet={this.updateTweet} />
        } />
        <Route path="/tweets/new" render={() =>
          <CreateTweet createTweet={this.createTweet} />
        } />
      </div>
    );
  }
}

export default withRouter(App);




















// import react, {Component} from 'react';
// import './App.css';
// import Profile from './Components/Profile/Profile';
// import Tweets from './Components/Tweets/Tweets';
// import { Route, Link,withRouter} from 'react-router-dom';
// import CreateTweet from './Components/CreateTweet/CreateTweet'


// class App extends Component
//  {
//    constructor(props){
//      super(props)

//      this.state ={
//        user: null,
//        tweets: []
//      }
//    }

//    async componentDidMount(){

//     this.setState({

//       user: {
//         id: '123',
//         username: 'Waheed Alam',
//         bio: ' Amet anim cupidatat deserunt esse aliqua.iquip adipisicing minim ipsum excepteur laboris.',
//         likedTweet:[],
//         photoUrl:'https://joeschmoe.io/api/v1/$Tim',
//         location: {}
//       },

//       tweets:[
//         {
        
//         timestamp: Date.now(),
//         id: '12',
//         userid:'123',
//         content: 'Amet anim cupidatat deserunt esse aliqua. Eu amet fugiat Lorem mollit dolor amet ea fugiat',
//         likes:0

//       },
//       {
        
//         timestamp: Date.now(),
//         id: '123',
//         userid:'123234',
//         content: ' This is my tweet to check likes ',
//         likes:0

//       }


//       ]
//     })
//    }

//    updateTweet = (id) =>{

//      const foundTweet = this.state.user.likedTweet.find( tweet => tweet===id)
//     console.log("----------")
//     console.log("+++"+foundTweet)
//     console.log("----------")
    
//     const tweet=this.state.tweets.find ((tweet)=> tweet.id===id)

//     const user=this.state.user;

//     if (!foundTweet) {
//       user.likedTweet.push(id);
//       tweet.likes +=1;
    
      
//     }
//     else {
      
//       user.likedTweet.splice(user.likedTweet.indexOf(id), 1)
//       tweet.likes -=1;
//     }


//     const updatedTweets=this.state.tweets.map(oneTweet =>{
//       return oneTweet.id===id ? tweet : oneTweet
//     })


//     this.setState({
//       tweets:updatedTweets,
//       user:user
//     })
   
//    }

//    createTweet = async (evt, tweetContent) => {
//     evt.preventDefault();
//     const newTweet = {}
//     newTweet.id = Math.floor(Math.random() * 10000)
//     newTweet.timestamp = Date.now();
//     newTweet.likes = 0;
//     newTweet.userId = '123';
//     newTweet.content = tweetContent;

//     console.log(newTweet);
//     const tweets = this.state.tweets;
//     tweets.push(newTweet);

//     this.setState({
//       tweets: tweets
//     })

//     this.props.history.push('/tweets');
//   }
//    render = () =>{

   
//   return (
//     <div className="App">
//       <header>
//         <nav>
//           <ul>
//             <li><Link to='/profile'> Profile</Link></li>
//             <li><Link to='/tweets'> Tweet</Link></li>
//             <li><Link to='/tweets/new'> Add Tweet</Link></li>

//           </ul>
//         </nav>
//       </header>
//       <h1>Welcome to <Link to="/">Project Skynet</Link></h1>

//       <Route path="/profile" render={() =>  
//           <Profile 
//             user={this.state.user} 
//             tweets={this.state.tweets}
//             updateTweet={this.updateTweet}
//           /> 
//         }/>
//      <Route exact path ='/tweets' render = { ()=>
//      <Tweets tweets={ this.state.tweets} updateTweet={this.updateTweet}/>}/>

//       <Route path="/tweets/new" render={() =>
//           <CreateTweet createTweet={this.createTweet} />
//         } />


     
      
//     </div>
//   );
// }
//  }
// export default withRouter(App);
