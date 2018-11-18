import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    // Update the state with onchange event
    handleChange = (e) => {
        this.setState({ content: e.target.value })
    }

    // Handle Submit, prevent default
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ content: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor=''>Add New ToDos:</label>
                    <input type='text' onChange={this.handleChange} value={this.state.content}></input>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;