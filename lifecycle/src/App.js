import './App.css';
import React from 'react';
import axios from 'axios';
import GithubInfo from './components/GithubInfo';

class App extends React.Component {
  state = {
    login: '',
    name: '',
    company: '',
    location: '',
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/cynthicrush')
      .then(res => {
        const {login, name, company, location } = res.data;
        this.setState({
          login, name, company, location
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className='app'>
        <h2>User Cards</h2>
        <div className='user-card'>
          <h3>{ this.state.name }</h3>
          <GithubInfo userInfo={this.state} />
        </div>
        
      </div>
    )
  }
}

export default App;
