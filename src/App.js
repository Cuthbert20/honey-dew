import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      todos: []
    }
  }
componentDidMount(){
  axios.get('/api/todos')
  .then(res => {
    console.log(res.data[2].todo_name)
    this.setState({
      todos: res.data
    })
  })
}

  render(){
    let allTodos = this.state.todos.map(val => (
      <div>
        <h4>{val.todo_name}, <span className='todo_info' >{val.todo_info}</span> </h4>
      </div>
    ))
  return (
    <div className="App">
      <Header />
      <h1>Honey Dew List</h1>
      {allTodos}
    </div>
  );
}
}

export default App;

//thing we need to do to the honey dew list
//add new todo
//update todo
//delete todo
//get list of todos
//get one todo
//mark todo as complete but, don't delete it
//mark todo as urget
//mark todo as dangers
