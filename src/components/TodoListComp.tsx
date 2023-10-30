import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import TodoListItemComp from './TodoListItemComp';

interface ITodos {
  todos: TodoType[]
  deleteTodo: DeleteFn
  toggleTodo : ToggleFn;
}

const TodoListComp:React.FC<ITodos> = ({todos, deleteTodo, toggleTodo}) => {
    const [completedTasks, setCompletedTasks] = useState<TodoType[]>([])
    const [progressTasks, setProgressTasks] = useState<TodoType[]>([])

    useEffect(() => {
      setCompletedTasks(todos.filter(todo=> todo.isDone))
      setProgressTasks(todos.filter(todo=> !todo.isDone))
    }, [todos])
    

  return (
    <Grid
      container
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
      >
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
        position="relative"
        >
        <Typography variant="h4" align="center" color="secondary">
          InProgress Todos
        </Typography>
        {progressTasks.length ? (
          progressTasks.map(item => <TodoListItemComp key={item.id} item={item} deleteTodo = {deleteTodo} toggleTodo={toggleTodo} />)
        ) : (
          <Typography color="error" mt={3}>
            No Progress todos!{" "}
          </Typography>
        )}
        <Box textAlign="center" position="absolute" bottom={0} left={0} right={0}>
          <Typography><sub>*Click double, if the task is completed</sub></Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}>
        <Typography variant="h4" align="center" sx={{ color: "green" }}>
          Completed Todos
        </Typography>
        {completedTasks.length ? (
          completedTasks.map(item => <TodoListItemComp key={item.id} item={item} deleteTodo = {deleteTodo} toggleTodo={toggleTodo} />)
        ) : (
          <Typography color="error" mt={3}>
            No Completed todos!{" "}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default TodoListComp