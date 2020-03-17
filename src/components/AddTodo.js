import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" name="title" placeholder="What do you need to do?" style={{ flex: '10', padding: '20px' }} value={this.state.title} onChange={this.onChange}/>
                <input type="submit" disabled={!this.state.title} value="Create" className="btn-create" style={{ flex: '1' }}/>
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
