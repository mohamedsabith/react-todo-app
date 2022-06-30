import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';



export default function TodoList(props) {
  const {todos,setTodo} = props


  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.grey',
        borderColor:'background.grey',
      }}
    >
    <CssBaseline />
      {
        todos.map((obj,i)=>(
          <>
          <ListItem key={i}>
          <ListItemAvatar>
            <Avatar onClick={()=>{  const newTodos = [...todos]; newTodos.splice(i, 1); setTodo(newTodos);}}>
              <DeleteIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={obj.text} secondary={obj.date} />
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
        ))
      }
    </List>
  );
}
