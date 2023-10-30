import React, { useState } from 'react'
import { Container, Box, TextField, Button } from '@mui/material';
import SaveIcon from "@mui/icons-material/Save";

//! to define the props. 
interface IAddTodo{
    // addTodo:(text:string) => void;
    addTodo:Addfn
}

//! React.FC =>> react functional compenent. if a compenent have a props. we have to use React.FC
const AddTodoComp:React.FC<IAddTodo> = ({addTodo}) => {

    const [task, setTask] = useState("")
    //! TypeScript type inference özelligi sayesinde, bir variable'in initial degerine göre otomatik type atamasi yapiyor... her zaman type belirtmek zorunda degiliz..

    const handleClick=()=>{
        addTodo(task)
        setTask("")
        console.log(task);     
    }

    return (
    <Container>
  <Box
    sx={{
      display: { xs: "block", sm: "flex" },
      justifyContent: "center",
      m: { xs: 4, sm: "auto" },
      height: { xs: "120px", sm: "80px" },
    }}>
    <TextField
      id="outlined-basic"
      label="New Todo"
      variant="outlined"
      sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
      inputProps={{ maxLength: 40 }}
      value={task}
      onChange={(e)=>setTask(e.target.value)}
    />
    <Button
      variant="contained"
      endIcon={<SaveIcon />}
      sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
      onClick={handleClick}
      // disabled={true}    //todo input bos oludugunda disable olmasi icin disabled i static olarak ayarliyoruz.
      disabled={!task.trim()}
      >
      Save Todo
    </Button>
  </Box>
</Container>
  )
}

export default AddTodoComp