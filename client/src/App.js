import React, { Component } from 'react';
import PlayersCard from './Components/PlayersCard';
import NavBar from './Components/NavBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({players: res})
    })
    .catch(err => console.log('No Data', err))
  }



  render() {
  return (
    <div className="App">
      <NavBar/>
      <PlayersCard players={this.state.players}/>
    </div>
  )};
}

export default App;
