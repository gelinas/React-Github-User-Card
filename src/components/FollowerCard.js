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
            </div>
        );
    }
}

export default FollowerCard;