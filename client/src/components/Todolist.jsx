import React, { Component } from 'react';
import './Todolist.css';
import { TodoApi } from '../api/todo_api';

class Todolist extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentWillMount() {
        TodoApi.getTodos().then((res) => {
            this.updateTodos(res)
        })
    }

    updateTodos(newTodos) {
        console.log(newTodos)
        this.setState({ todos: newTodos})
    }

    render(){
        return(
            <ul>
                {
                    this.state.todos.map((todo, idx) => {
                        return (<li key={idx}>{todo.text}</li>)
                    })
                }
            </ul>
        )
    }
}

export default Todolist;