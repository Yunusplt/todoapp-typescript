import React from 'react'
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface IListItem {
  item: TodoType;
}

const TodoListItemComp:React.FC<IListItem> = ({item}) => {
   return (
    <ListItem
      sx={{ cursor: "pointer", overflow: "hidden" }}
      secondaryAction={
        <IconButton aria-label="comment" sx={{ "&:hover": { color: "red" } }}>
          <DeleteIcon/>
        </IconButton>
      }>
      <ListItemText primary={item.task} sx={{ wordWrap: "break-word" }} />
    </ListItem>
  );
}

export default TodoListItemComp