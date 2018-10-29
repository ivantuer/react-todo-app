import React, { Fragment } from 'react'

const Completed = ({ todoList, complete, deleteTodo, saveTodo, editTodo }) => {
  return (
    <ul className="uncompleted">
      {!!todoList.length &&
        todoList.map(
          (el, index) =>
            el.completed === false && (
              <div
                className="uncompleted-element"
                key={`todo_${index}`}
                id={index}
              >
                {el.onEdit ? (
                  <Fragment>
                    <input name="editedInput" defaultValue={el.value} />
                    <button onClick={saveTodo}>Save</button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li>{el.value}</li>
                    <div className="buttons">
                      <button onClick={complete}>Complete</button>
                      <button onClick={deleteTodo}>Delete</button>
                      <button onClick={editTodo}>Edit</button>
                    </div>
                  </Fragment>
                )}
              </div>
            )
        )}
    </ul>
  )
}

export default Completed
