
import React, { useState } from 'react';

function HookComponent() {



    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const handleTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
    }

    const todosList = () => {
        console.log(todos);
        return todos.map((item,index) => {
            return <li key={index}>{item}</li>
        });
    }

    const handleOnChange = (e) => {
        return (e.target.value) ? setTodo(e.target.value): "";
    }

    console.log("Result: " + JSON.stringify(todos));
    return (
        <div>
            HookComponent
            <div>
            <form onSubmit={handleTodo}>
                <input type="text" name="todo-name" value={todo} onChange={handleOnChange} />{todo}
                <button type="submit">Enter</button>
            </form>
            </div>
            <div>
                <ul>
                    {todosList()}
                </ul>
            </div>
        </div>
    );
}

export default HookComponent;