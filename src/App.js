import React from 'react'
import ToDoList from './ToDoList'

function App() {
  return (
    <>
      <ToDoList/> 
      <input type = "text" />
      <input type ="button" value ="Check me"/>
      <input type ="button" value ="ToDoList"/>
    </>

  );
}

export default App;
