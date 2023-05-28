import logo from './logo.svg';
import './App.css';
import HomeOne from './pages/HomeOne';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';



function App() {
  return (
    <Router>
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
  );
}

export default App;
