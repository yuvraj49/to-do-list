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
        date: ''
      }
      ]
    };
  }

  handleClick(i) {

     this.setState(prevState => ({
      items: prevState.items.concat(i)
    }));

     if(this.state.items.length >= 3){
      console.log("here is the result");
     }

    console.log(i);
  }



  render() {
    return (
      <div className="App">


        <CreateToDo
             onReturn={i => this.handleClick(i)}
         />
        <ToDoList item = {this.state.items} />


      </div>
    );
  }
}

export default App;

