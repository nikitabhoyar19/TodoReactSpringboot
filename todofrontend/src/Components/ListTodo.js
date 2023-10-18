import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { AuthContext, useAuth } from '../security/AuthContext';
import { retriveTodoForUs } from '../api/TodoApiService';

export default function ListTodo() {
    // const authContext = AuthContext();
    //console.log("ListTodo : " + authContext.number);

    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDay()+18);

    // const todos = [{id : 1, name : 'nikita', targetDate : targetDate, done : false},
    //               {id : 2, name : 'kk', targetDate : targetDate, done : false},
    //               {id : 3, name : 'nikita', targetDate : today, done : false},
    //               {id : 4, name : 'kk', targetDate : today, done : false}]

    const [todos, setTodos] = useState([])

    function refreshTodos() {
      retriveTodoForUs('in28minutes')
      .then(res => setTodos(res.data))
      .catch(error => console.log(error))
    }

    useEffect(
      () => refreshTodos(), []
    )
     
  


  return (
    <div className='container'>
        <h1 style={{color: "blue"}}>Here your Todo List</h1>
        <hr />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Tasks</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {
            todos.map(
                todo => (
                    <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.username}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
                )
            )
          }
        
        </tbody>
        </Table>
    </div>
  )
}
