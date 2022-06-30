import React,{useState} from 'react'
import svg from '../../assets/undraw_add_tasks_re_s5yj.svg'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import TodoList from '../../components/ToDos/Todo'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Box  from '@mui/material/Box';
import BottomNavigationBar from '../../components/BottomNavigation/BottomNavigation'
import Swal from 'sweetalert2'
import moment from 'moment'
import withReactContent from 'sweetalert2-react-content'
import './style.css';

const Home = () => {

  const [todo,setTodo]=useState('')
  const [Todos,setTodos]=useState([]) 

  const handleSubmit = (event) =>{
    event.preventDefault();
    setTodos([...Todos,{text:todo,status:false,date:moment(Date.now()).format('dddd, MMMM Do YYYY, h:mm:ss a')}])

  const MySwal = withReactContent(Swal)

  MySwal.fire({
    title: <p>Adding Todo</p>,
    timer:2000,
    didOpen: () => {
      MySwal.showLoading()
    },
  }).then(() => {
      return MySwal.fire(<p>Successfully Added</p>)
  })

  }

  return (
   <>
   <div>
      <Grid container sx={{alignItems:"center"}}>
        <Grid item xs={12} sm={6}>
          <img src={svg} alt="logo" className='img'/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{marginX:3}} component="h2" variant="h6" gutterBottom>TODO APP</Typography>
          <form onSubmit={handleSubmit} autoComplete="off">
          <TextField  onChange={(event)=>setTodo(event.target.value)}  id="outlined-basic" label="ADD TODO" variant="outlined" InputProps={{startAdornment: (<InputAdornment position="start"><AddCircleRoundedIcon/> </InputAdornment>), }} sx={{width:'43ch',marginY:1,marginX:1}} required/>
          </form>
          <Box>
            <TodoList todos={Todos} setTodo={setTodos}/>
          </Box>
          <BottomNavigationBar/>
        </Grid>
      </Grid>
    </div>
   </> 
  )
}

export default Home