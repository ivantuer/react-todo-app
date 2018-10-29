import React from 'react'

const Input = ({ handleSubmit }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="input" />
      <button>Add</button>
    </form>
  )
}

export default Input
