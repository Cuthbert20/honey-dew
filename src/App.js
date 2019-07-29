import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {
  constructor(){
    super()

    this.state = {
      toDos: ['Dishes', 'Laundry', 'Fence', 'Spray for Bugs', 'Build Cabin']
    }
  }
  render(){
  return (
    <div className="App">
      <Header />
      <h1>Honey Dew List</h1>
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
