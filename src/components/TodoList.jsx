import React, { Fragment } from 'react'
import Completed from './Completed'
import Uncompleted from './Uncompleted'

const TodoList = ({
  todoList,
  complete,
  show,
  handleShow,
  deleteTodo,
  editTodo,
  saveTodo,
}) => {
  return (
    <div>
      {show === 'Uncompleted' && (
        <Uncompleted
          todoList={todoList}
          complete={complete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          saveTodo={saveTodo}
        />
      )}
      {show === 'Completed' && (
        <Completed
          todoList={todoList}
          complete={complete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          saveTodo={saveTodo}
        />
      )}
      {show === 'All' && (
        <Fragment>
          <Uncompleted
            todoList={todoList}
            complete={complete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            saveTodo={saveTodo}
          />
          <Completed
            todoList={todoList}
            complete={complete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            saveTodo={saveTodo}
          />
        </Fragment>
      )}

      <button onClick={handleShow}>All</button>
      <button onClick={handleShow}>Completed</button>
      <button onClick={handleShow}>Uncompleted</button>
    </div>
  )
}

export default TodoList
