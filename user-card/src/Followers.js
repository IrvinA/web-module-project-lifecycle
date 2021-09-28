import React from "react";
import axios from "axios";

class Followers extends React.Component {
    
    state = {
        followersArr: []
    }

    componentDidMount() {
        setTimeout(() => {
            axios.get(`${this.props.followers}`)
                .then(res => {
                    this.setState({
                        ...this.state,
                        followersArr: res.data
                    });
                })
            }, 3000)
    }

    componentDidUpdate() {
        setTimeout(() => {
            axios.get(`${this.props.followers}`)
                .then(res => {
                    this.setState({
                        ...this.state,
                        followersArr: res.data
                    });
                })
            }, 3000)
    }

    render() {
        return(
            <div>
                {
                    this.state.followersArr.map(follower => {
                        return(
                            <div key={follower.id}>
                                <img src={follower.avatar_url} alt={follower.avatar_url}/>
                               <h3>{follower.login}</h3> 
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Followers;