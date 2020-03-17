import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, date, completed } = this.props.todo;
        return (
            <div style={divStyle}>
                <table>
                    <tbody>
                        <tr style={{width: '100%'}}>
                            <td style={{width: '5%'}}>
                                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} defaultChecked={completed}/>
                            </td>
                            <td style={this.getStyle()} id='title'>
                                { title } 
                            </td>
                            <td style={this.getStyle()} id='date'>
                                { date }
                            </td>
                            <td style={{width:  '7%'}}><button onClick={this.props.delTodo.bind(this, id)} className="btn-delete" >x</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const divStyle = {
    padding: '10px',
    borderBottom: '1px #ccc dotted',
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
