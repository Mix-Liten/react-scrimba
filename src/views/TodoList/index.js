import React, { Component } from 'react'
import TodoItem from '../../components/TodoList/TodoItem'
import todosData from "../../todosData"
// import logo from './logo.svg'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateTodos =  prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updateTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default TodoList