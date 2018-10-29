import React, { Component } from 'react'
import Input from './components/Input'
import TodoList from './components/TodoList'

import './App.css'

class App extends Component {
  state = {
    todoList: [],
    show: 'All',
  }
  handleSubmit = e => {
    e.preventDefault()
    e.target.elements.input.value &&
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            value: e.target.elements.input.value,
            completed: false,
            onEdit: false,
          },
        ],
      })
    e.target.elements.input.value = ''
  }
  complete = e => {
    const newTodoList = this.state.todoList
    newTodoList[e.target.parentNode.parentNode.id].completed = !newTodoList[
      e.target.parentNode.parentNode.id
    ].completed

    this.setState({
      todoList: newTodoList,
    })
  }
  handleShow = e => {
    this.setState({ show: e.target.innerText })
  }
  deleteTodo = e => {
    console.log('suka rot ebal')
    const newTodoList = this.state.todoList
    newTodoList.splice([e.target.parentNode.parentNode.id], 1)
    this.setState({
      todoList: newTodoList,
    })
  }
  editTodo = e => {
    console.log('suka rot ebal')
    const newTodoList = this.state.todoList
    console.log(e)
    newTodoList[e.target.parentNode.parentNode.id].onEdit = true
    this.setState({
      todoList: newTodoList,
    })
  }
  saveTodo = e => {
    const newTodoList = this.state.todoList
    console.log(e.target.parentNode.children[0].value)
    newTodoList[e.target.parentNode.id].value =
      e.target.parentNode.children[0].value
    newTodoList[e.target.parentNode.id].onEdit = false
    this.setState({
      todoList: newTodoList,
    })
  }
  render() {
    return (
      <div className="app">
        <Input handleSubmit={this.handleSubmit} />
        <TodoList
          todoList={this.state.todoList}
          complete={this.complete}
          show={this.state.show}
          handleShow={this.handleShow}
          deleteTodo={this.deleteTodo}
          onEdit={this.state.onEdit}
          editTodo={this.editTodo}
          saveTodo={this.saveTodo}
        />
      </div>
    )
  }
}

export default App
