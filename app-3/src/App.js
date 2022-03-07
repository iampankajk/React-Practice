import React, {useState} from 'react';
import './App.css';
// import Card from './Card/Card';
import UserInput from './Components/Users/UserInput';
import UsersList from './Components/Users/UsersList';

function App() {

  const [usersList,setUsersList]=useState([]);

  const addUsersHandler = (uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  };


  return (
    <div>
      <UserInput onAddUser={addUsersHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
