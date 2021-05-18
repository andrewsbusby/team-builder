import {useState} from 'react';
import './App.css';
import Form from './components/forms';

const myTeam =[
  {name: 'Joe', email: 'joe@joesmoe.com', role: 'Software Engineer'},
  {name: 'Chet', email: 'chetman@chet.com', role: 'Data Scientist'},
  {name: 'Cameron', email: 'cam_man@cameron.com', role: 'Backend Developer'},
  {name: 'Josh', email: 'joshy@josh.com', role: 'Designer'}
]

const formsValue = {
  name: '',
  email: '',
  role: ''
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
