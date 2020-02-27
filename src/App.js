import React, {useState} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import TeamMembersForm from "./Components/TeamMembersForm";
import TeamMembers from "./Components/TeamMembers"

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Cody",
      email: "aklsdghflkasgdf",
      role: "student"
        
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team Members</h1>
      {/* we are going to pass a function down as a prop */}
      <TeamMembersForm addNewMember={addNewMember} />
      <TeamMembers members={members} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



export default App;
