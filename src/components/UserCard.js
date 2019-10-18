import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div className="user-card">
                <img 
                    src={this.props.userData.avatar_url} 
                    alt={this.props.userData.name}
                />
                <h2>{this.props.userData.name}</h2>
                <p>{this.props.userData.bio}</p>
                <p>
                    {`Currently has ${this.props.userData.followers} followers`}
                </p>
                <a href={this.props.userData.html_url}>See his GitHub here</a>
            </div>
        );
    }
}

export default UserCard;