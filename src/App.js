
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {

  const [alert, setAlert]=useState('null'); 

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null);
    },2000);
  }

  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}></Alert>
        <div className='container'>
        <Routes>
          <Route exact path="/home" element={<Home showAlert={showAlert}/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Login showAlert={showAlert}/>}>
          </Route>
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}>
          </Route>
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );

}

export default App;
