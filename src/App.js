import './App.css';
import React,{useState} from 'react';
import TodoTable from './Components/TodoTable';

function App() {

  const [todos, setTodos] =useState([
    { rowNumber: 1, rowDescription: 'Read book', status: "done" },
    { rowNumber: 2, rowDescription: 'Drink Water', status: "not done" },
    { rowNumber: 3, rowDescription: 'water plants', status: "not done" },
    { rowNumber: 4, rowDescription: 'running', status: " done" },
    
  ])
 
  const addTodo = () => { 
    
    if(todos.length > 0) {
      const newTodo = {
        rowNumber : todos.length+1,
        rowDescription : 'New Todo',
        status : 'not done'
      };
      
      setTodos(todos => [...todos, newTodo])
    }
  }

  return (

    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
      </div>
      <div className='card-body'></div>
      <TodoTable  Key={todos} />
      <button className='btn btn-primary' onClick = {addTodo}>Add Todo</button>
    </div>
  );
}

export default App;