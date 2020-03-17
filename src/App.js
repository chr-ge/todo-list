import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import TotalTodos from './components/TotalTodos';
import About from './components/pages/About';
import { v4 as uuid } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const datetime = new Date();
    const newTodo = {
      id: uuid(),
      title,
      date: datetime.toLocaleString('default', { month: 'long' }) + ' ' + 
            datetime.getDate() +' @ '+ 
            datetime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]} );
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container" >
            <Header />
            <Route exact path="/" render={props => (
               <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
                  <TotalTodos todos={this.state.todos} />
               </React.Fragment> 
            )} /> 
            <Route exact path="/completed" render={props => (
               <React.Fragment>
                  <Todos todos={this.state.todos.filter(todo => todo.completed === true)} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
                  <TotalTodos todos={this.state.todos} />
               </React.Fragment> 
            )} /> 
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
