import React,{useState,useEffect} from 'react'
import FadeLoader from "react-spinners/FadeLoader";
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const App = () =>{
  
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },3000)
  }, [])
  
  return (
    <>
    <React.Fragment>
    <CssBaseline />
    {
      loading ?
      <div className='App'>
       <FadeLoader color={"#3650D7"} loading={loading}  size={30} />
       <h1>Loading......</h1>
      </div>
       :
       <>
      <Navbar/>
       <Home/>
      </>
    }
    </React.Fragment>
    </>
  );
}

export default App;
