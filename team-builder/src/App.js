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

  const [members, setMembers] = useState(myTeam);

  const [val, setVal] = useState(formsValue);

  const update = (inputName, inputValue) => {
    setVal({...val, [inputName]: inputValue})
  }

  const submit = () => {
    const teamMember = {
      name: val.name.trim(),
      email: val.email.trim(),
      role: val.role.trim()
    }

    if(!teamMember.name || !teamMember.email || !teamMember.role) return
    setMembers([...members, teamMember]);
  }
  return (
    
  );
}

export default App;
