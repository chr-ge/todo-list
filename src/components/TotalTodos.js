import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

class TotalTodos extends Component {
    getStyle = () => {
        return {
            color: 'white',
            background: this.countCompleted() > 0 ? '#0dce0d' : '#6600ff'
        }
    }
    
    //Count the total number of todos.
    countTodos = () => {
        const countTypes = this.props.todos;
        return countTypes.length;
    }
    
    //Count how many todos have been completed.
    countCompleted = () => {
        const countTypes = this.props.todos.filter(todo => todo.completed === true);
        return countTypes.length;
    }

    render() {
        return (
            <div style={divStyle}>
                <Link to="/" style={{color:'white'}}><p>Total Tasks: <b>{this.countTodos()}</b></p></Link>
                {this.countCompleted() > 0 ? 
                    <Link to="/completed" title={titleMsg}><p style={this.getStyle()}>Completed Tasks: <b>{this.countCompleted()}</b></p></Link>
                    :
                    <p style={this.getStyle()}>Completed Tasks: <b>{this.countCompleted()}</b></p>
                }
            </div>
        );
    }
}

const titleMsg = "View Completed Todos"

const divStyle = {
    textAlign:'center',
    background: '#6600ff'
}

export default TotalTodos;