import React from "react";
import axios from "axios";
import User from "./User";

class App extends React.Component {
  
  state = {
    user: {},
    person: ""
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/IrvinA')
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      })
  }

  handleInput = (e) => {
    this.setState({
      ...this.state,
      person: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.person}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data,
        })
      })
  }


  render() {
    
    return(
      
      <div>
        
        <header>
          <h1>Github User Card</h1>
          <form>
            <input onChange={this.handleInput}/>
            <button onClick={this.handleSearch}>Get User</button>
          </form>
        </header>
        
        <div>
          <User user={this.state.user} />
        </div>
      
      </div>
    )
  }
}

export default App;
