import React from 'react';

class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }


    render() {
        return(
            <div className="user-card">
                <img 
                    src={this.props.userData.avatar_url} 
                    alt={this.props.userData.login}
                />
                <h2>{this.props.userData.login}</h2>
                <a href={this.props.userData.html_url}>See his GitHub here</a>
                <p>
                    <button onClick={() => this.props.changeUser(this.props.userData.login)}>
                        Load his card
                    </button>
                </p>
            </div>
        );
    }
}

export default FollowerCard;