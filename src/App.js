import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'


import './App.scss';

class App extends React.Component {
  state = {
    userName: 'gelinas',
    userUrl: '',
    userData: [],
    userFollowersUrl: '',
    userFollowers: []
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/${this.state.userName}`)
    .then(res => {
      // console.log("user url res", res);
      this.setState({
        userData: res.data,
        userFollowersUrl: res.data.followers_url
      });
      axios
        .get(this.state.userFollowersUrl)
        .then(res =>{
          // console.log("followers url res", res)
          this.setState({
            userFollowers: res.data
          });
          console.log("nested axios", this.state)
          })
        .catch(err => console.log(err));
      // console.log(this.state.userData)  
      // console.log(this.state);
    })
    .catch(err => console.log(err));
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {`${this.state.userData.name} Github User Card`}
          </h1>
        </header>
        <section>
          <UserCard userData={this.state.userData} />
        </section>
        <section>
          <h2>{`${this.state.userData.name} follower list`}</h2>
          {this.state.userFollowers.map(
            follower => <FollowerCard key={follower.id} userData={follower} />
          )}
        </section>
      </div>
    );
  }
}

export default App;
