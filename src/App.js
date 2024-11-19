import { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
const [todos, setTodos] = useState([])
const [todoValue, setTodoValue]= useState('')

function handleAddTodos(newTodo) {
  const newTodoList=[...todos, newTodo]
  setTodos(newTodoList)
}

function handleDeleteTodo(index) {
  const newTodoList= todos.filter((todo,todoIndex) => {
    return todoIndex !== index
  })
setTodos(newTodoList)
}

function handleEditTodo(index) {
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)

}
  return (
      <>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} 
      handleAddTodos={handleAddTodos} />
      <ToDoList handleEditTodo={handleEditTodo}
       handleDeleteTodo={handleDeleteTodo} todos={todos} />
      </>
      
  )
}

export default App
