import React from "react";
import Followers from "./Followers";

class User extends React.Component {

    render() {
        const { user } = this.props;
        const login = user.login;
        const name = user.name;
        const avatar = user.avatar_url;
        const followers = user.followers;
        const following = user.following;
        const followersUrl = user.followers_url
        return(
            <div>
                <div>
                    <img src={avatar} alt={avatar}/>
                    <h2>{name}</h2>
                </div>
                <div>
                    <h3>Username: {login}</h3>
                    <p>Followers: {followers}</p>
                    <p>Following: {following}</p>
                </div>
                <div>
                    <p>Users Following:</p>
                    <div>
                         <Followers followers={followersUrl} />
                    </div>
                </div>
            </div>
        );
    }
}

export default User;