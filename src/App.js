import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateToDo from './CreateToDo.js'
import ToDoList from './ToDoList';
import './styles.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [{
        heading: 'Demo Heading',
        details: 'Demo detail for completing the to do list app right away',
        id: 0
      }],
      counter: 0,
    };
  }

  handleClick(i) {
     this.setState(prevState => ({
      items: prevState.items.concat(i),
      counter : prevState.counter + 1 
    }));

     if(this.state.counter >= 3){
      console.log("here is the result");
     }
  }

  handleDelete(i){
    var array = this.state.items;
    array.splice(i,1);
    this.setState((prevState) => ({
      items: array,
      counter: prevState.counter - 1
    }));
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <CreateToDo
             onReturn={i => this.handleClick(i)}
         />
        <ToDoList item = {this.state.items} onDelete = {j => this.handleDelete(j)} />
      </div>
    );
  }
}

export default App;

