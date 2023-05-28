import logo from './logo.svg';
import './App.css';
import HomeOne from './pages/HomeOne';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import { useState } from 'react';



function App() {
  //let  count=0;
  const [count,setCount]=useState(0);
  const increment = () =>{
    setCount(count+1);
    //count++
  };
  const decrement = () =>{
    setCount(count-1);
  };
  return (
    <>
    <h1 class="title">My counter</h1>
    <span class="subtitle">Count is {count}</span>
    <button onClick={decrement}class="button">-</button>
    <button onClick={increment}class="button">+</button></>
    /* <Router>
    <div>
     <Routes>
        <Route exact path="/"element={<HomeOne/>}>
       
        </Route>
        <Route path="/About"element={<About/>}>
       
        </Route>
        <Route path="/ContactUs"element={<ContactUs/>}>
       
        </Route>
      </Routes> 
    </div>
  </Router>
  <> */
  );
}

export default App;
