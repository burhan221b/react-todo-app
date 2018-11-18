import React from 'react';

const Todos = (props) => {
    let { todos } = props;
    let { deleteTodo } = props;
    const todosList = todos.length ? (
        todos.map((todo) => {
            return <div className='collection-item' key={todo.id}>
                <span>{todo.content}</span><span className='blue-text del' onClick={deleteTodo.bind(this, todo.id)}> X</span>
            </div>
        })) : <p className="center">You have no ToDos!</p>;
    return (
        <div className="todos collection">
            {todosList}
        </div>
    );
}

export default Todos;