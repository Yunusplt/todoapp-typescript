import React, {useState,useEffect} from 'react'
import { Container,Typography } from '@mui/material';
import AddTodoComp from '../components/AddTodoComp';
import TodoListComp from '../components/TodoListComp';
import axios from 'axios';
import { notify } from '../helper/sweetAlert';

//! objelerin type i belirlenirken interface kullanilir. 


const url = "https://64a7a5bddca581464b848170.mockapi.io/todos"


const Main = () => {
    const [todos, setTodos] = useState<TodoType[]>([])

    const getTodos =async () => {
        try {
            const {data} = await axios.get<TodoType[]>(url)
            console.log(data);
            setTodos(data)
        } catch (error) {
            console.log(error);
            
        }
    }

    // type Addfn = (text:string) => void;
    const addTodo:Addfn = async (task) => {
        const newTodo = {
            task: task,
            isDone: false,
        } 
        try {
            await axios.post(url, newTodo)
            notify("Task successfully created!", "success")
            getTodos()
        } catch (error) {
            notify("Task can't successfully created!", "error")
        }
    }
    //! II. way
    // const AddTodo = async (task:string) => {
    //     const newTodo = {
    //         task: task,
    //         isDone: false,
    //     } 
    //     try {
    //         await axios.post(url, newTodo)
    //         getTodos()
    //     } catch (error) {
            
    //     }
    // }

const deleteTodo:DeleteFn =async (id) => {
        console.log(id);
        
  try {
    await axios.delete(`${url}/${id}`)
    notify("Task successfully deleted!", "success")
    getTodos()
  } catch (error) {
    notify("Task can not deleted!", "error")
    console.log(error);
  }
}
const toggleTodo:ToggleFn =async (item) => {
  try {
    await axios.put(`${url}/${item.id}`, {...item, isDone: !item.isDone});
    notify("Task successfully updated", "success")
    getTodos()
  } catch (error) {
    notify("Task can't successfully updated", "error")
    console.log(error);
    
  }
}


    useEffect(() => {
      getTodos()
    }, [])
    

  return (
    <Container>
        <Typography color="error" variant='h2' component={"h1"} align='center' mt={3} >ToDo App with TypeScript</Typography>
        <AddTodoComp addTodo={addTodo}/>
        <TodoListComp todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </Container>
  )
}

export default Main